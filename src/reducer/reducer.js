const initialData = {
  List: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        List: [
          ...state.List,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "Delete_TODO":
      const updateList = state.List.filter((items) => items.id !== action.id);
      return {
        ...state,
        List: updateList,
      };
    default:
      return state;
  }
};
export default todoReducers;
