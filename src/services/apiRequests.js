class ApiRequests {
  getAnimals(type, amount) {
    const url = amount
      ? `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}.json?orderBy="$key"&limitToFirst=${amount}`
      : `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}.json?`;
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
        // Transform data to include keys
        console.log(data);
        const result = [];
        for (const key in data) {
          result.push({ id: key, ...data[key] });
        }
        return result;
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

        // Recursive function to fetch next animal
        const fetchNextAnimal = (startId) => {
          return fetch(
            `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}.json?orderBy="$key"&startAt="${startId}"&limitToFirst=35`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .then((data) => {
              const keys = Object.keys(data).filter((key) => key !== startId);
              for (let key of keys) {
                if (
                  (currentAnimal.category[0] === "in-memoriam" ||
                    currentAnimal.category[0] === "adopted") &&
                  data[key].category[0] === currentAnimal.category[0]
                ) {
                  return { id: key, ...data[key] };
                } else if (
                  currentAnimal.category[0] !== "in-memoriam" &&
                  currentAnimal.category[0] !== "adopted" &&
                  data[key].category[0] !== "in-memoriam" &&
                  data[key].category[0] !== "adopted"
                ) {
                  return { id: key, ...data[key] };
                }
              }
              return keys.length > 0
                ? fetchNextAnimal(keys[keys.length - 1])
                : null;
            })
            .catch(() => null);
        };

        const fetchPrevAnimal = (endId) => {
          return fetch(
            `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}.json?orderBy="$key"&endAt="${endId}"&limitToLast=35`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .then((data) => {
              const keys = Object.keys(data).filter((key) => key !== endId);
              for (let key of keys.reverse()) {
                if (
                  (currentAnimal.category[0] === "in-memoriam" ||
                    currentAnimal.category[0] === "adopted") &&
                  data[key].category[0] === currentAnimal.category[0]
                ) {
                  return { id: key, ...data[key] };
                } else if (
                  currentAnimal.category[0] !== "in-memoriam" &&
                  currentAnimal.category[0] !== "adopted" &&
                  data[key].category[0] !== "in-memoriam" &&
                  data[key].category[0] !== "adopted"
                ) {
                  return { id: key, ...data[key] };
                }
              }
              return keys.length > 0 ? fetchPrevAnimal(keys[0]) : null;
            })
            .catch(() => null);
        };

        return Promise.all([fetchNextAnimal(id), fetchPrevAnimal(id)]).then(
          ([next, prev]) => {
            return {
              currentAnimal: { id, ...currentAnimal },
              prev: prev ? prev : null,
              next: next ? next : null,
            };
          }
        );
      })
      .catch((error) => {
        throw new Error(
          `Error fetching current, prev, next animals: ${error.message}`
        );
      });
  }

  getAnimalById(type, id) {
    const url = `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/${type}/${id}.json`;
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
        if (data) {
          return { id: id, ...data };
        } else {
          throw new Error(`No data found for id: ${id}`);
        }
      });
  }

  getNews(amount) {
    const url = amount
      ? `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/news.json?orderBy="$key"&limitToFirst=${amount}`
      : `https://pino-nmpb-default-rtdb.europe-west1.firebasedatabase.app/news.json`;
    return fetch(url, {
      method: "GET",
    }).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
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
