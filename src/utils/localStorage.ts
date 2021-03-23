export const loadState = () => {
  try {
    const serialState = localStorage.getItem('authUser');
    if (!serialState) {
      return null;
    }

    return JSON.parse(serialState);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const saveState = (state: any) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('authUser', serialState);
  } catch (err) {
    console.log(err);
  }
};
