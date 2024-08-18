class ApiRequests {
  getAnimals(type, amount) {
    const url = amount
      ? `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}.json?orderBy="category_query"&equalTo="for-adoption"&limitToLast=${amount}`
      : `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}.json`;
    return fetch(url, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const result = [];
        for (const key in data) {
          result.push({ id: key, ...data[key] });
        }

        return result.sort((a, b) => {
          const dateA = new Date(a.timestamp);
          const dateB = new Date(b.timestamp);
          return dateB - dateA;
        });
      });
  }

  getPrevCurrentNextAnimalById(type, id) {
    const url = `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}/${id}.json`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((currentAnimal) => {
        if (!currentAnimal) {
          throw new Error(`No data found for id: ${id}`);
        }

        const categoryQuery = currentAnimal.category_query;

        const fetchPrevAndNextAnimal = () => {
          return fetch(
            `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}.json?orderBy="category_query"&equalTo="${categoryQuery}"`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .then((data) => {
              const result = Object.keys(data)
                .map((key) => ({
                  id: key,
                  ...data[key],
                }))
                .sort((a, b) => {
                  const dateA = new Date(a.timestamp);
                  const dateB = new Date(b.timestamp);
                  return dateB - dateA;
                });

              const currentIndex = result.findIndex((item) => item.id === id);
              const prev = currentIndex > 0 ? result[currentIndex - 1] : null;
              const next =
                currentIndex < result.length - 1
                  ? result[currentIndex + 1]
                  : null;

              return {
                prev: prev,
                next: next,
              };
            });
        };

        return fetchPrevAndNextAnimal().then(({ prev, next }) => {
          return {
            currentAnimal: { id, ...currentAnimal },
            prev,
            next,
          };
        });
      })
      .catch((error) => {
        throw new Error(
          `Error fetching current, prev, next animals: ${error.message}`
        );
      });
  }

  getNews(amount) {
    const url = amount
      ? `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/news.json?orderBy="$key"&limitToFirst=${amount}`
      : `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/news.json`;
    return fetch(url, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const result = [];
        for (const key in data) {
          result.push({ id: key, ...data[key] });
        }

        return result.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
      });
  }

  getNewsById(id) {
    const url = `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/news/${id}.json`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((currentArticle) => {
        const fetchPrevArticle = fetch(
          `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/news.json?orderBy="$key"&endAt="${id}"&limitToLast=2`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        });

        const fetchNextArticle = fetch(
          `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/news.json?orderBy="$key"&startAt="${id}"&limitToFirst=2`
        ).then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        });

        return Promise.all([fetchPrevArticle, fetchNextArticle]).then(
          ([prevArticles, nextArticles]) => {
            const prevArticleIds = prevArticles
              ? Object.keys(prevArticles)
              : [];
            const nextArticleIds = nextArticles
              ? Object.keys(nextArticles)
              : [];

            const prev =
              prevArticleIds.length > 1
                ? { id: prevArticleIds[0], ...prevArticles[prevArticleIds[0]] }
                : prevArticleIds.length === 1 && prevArticleIds[0] !== id
                ? { id: prevArticleIds[0], ...prevArticles[prevArticleIds[0]] }
                : null;

            const next =
              nextArticleIds.length > 1
                ? { id: nextArticleIds[1], ...nextArticles[nextArticleIds[1]] }
                : nextArticleIds.length === 1 && nextArticleIds[0] !== id
                ? { id: nextArticleIds[0], ...nextArticles[nextArticleIds[0]] }
                : null;

            return {
              currentArticle,
              prev,
              next,
            };
          }
        );
      });
  }
  addNew(type, data) {
    return fetch(
      `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}
export default new ApiRequests();
