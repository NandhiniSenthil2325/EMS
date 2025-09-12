export const deptService = {
  list: async () => {
    return [
      { id: 1, name: "HR" },
      { id: 2, name: "Engineering" },
      { id: 3, name: "Sales" }
    ];
  },
  add: async (payload) => payload,
  update: async (id, payload) => ({ id, ...payload })
};
