// function average(numbers) {
//   return numbers.reduce((a, b) => a + b, 0) / numbers.length;
// }

export const selectDevelopers = (state) => {
  return state.developers;
};

// export const selectDeveloperStatistics = (state) => {
//   return {
//     num: state.developers.length,
//     numWithWebsite: state.developers.filter((dev) => !!dev.url).length,
//     numWithoutFavorites: state.developers.filter(
//       (dev) => dev.favorites.length === 0
//     ).length,
//     avgNumberOfFavorites: average(
//       state.developers.map((dev) => dev.favorites.length)
//     ),
//   };
// };

export const selectDevelopersWithFavorite = (selectedResource) => {
  return (state) => {
    return state.developers.filter((dev) =>
      dev.favorites.includes(selectedResource)
    );
  };
};
