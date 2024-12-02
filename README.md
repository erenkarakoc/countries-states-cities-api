# Countries States Cities API

A free API that provides information about countries, states, and cities, deployed on Netlify.

---

## Base URL

The API is deployed on Netlify using its free service. You can access the REST API through the following base URL:

`https://countries-states-cities-api.netlify.app/.netlify/functions/[Endpoint]`

Replace `[Endpoint]` with the specific endpoint (e.g., `/getCountries`).

## Endpoints

#### Get All Countries

```https
  GET /getCountries
```

---

#### Get Country by ID

```https
  GET /getCountryById?countryId=${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `countryId`      | `number` | **Required**. The ID of the country to retrieve. |

---

#### Get All States by Country ID

```https
  GET /getStatesByCountry?countryId=${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `countryId`      | `number` | **Required**. The ID of the country to retrieve its states. |

---

#### Get State by ID

```https
  GET /getStateById?stateId=${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `stateId`      | `number` | **Required**. The ID of the state to retrieve. |

---

#### Get All Cities by State ID

```https
  GET /getCitiesByState?stateId=${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `stateId`      | `number` | **Required**. The ID of the state to retrieve its cities. |

---

#### Get City by ID

```https
  GET /getCityById?cityId=${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `number` | **Required**. The ID of the city to retrieve. |
  