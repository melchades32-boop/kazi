const apiResponsse = {
    pager: {
        page: 1,
        pageSize: 50,
        total: 120,
    },
    dataElements: [
        { id: "de1", displayName: "ANC visits" },
        { id: "de2", displayName: "Malaria cases confirmed" },
        { id: "de3", displayName: "BCG doses" },
    ],
};
const dataElement = {
    id: "de2",
    displayName: "Malaria cases",
    valueType: "INTEGER",
};
console.log(apiResponsse.dataElements[1].displayName);