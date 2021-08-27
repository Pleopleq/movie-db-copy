enum Months {
  Jan = 1,
  Feb = 2,
  Mar = 3,
  Apr = 4,
  May = 5,
  Jun = 6,
  Jul = 7,
  Aug = 8,
  Sep = 9,
  Oct = 10,
  Nov = 11,
  Dec = 12,
}

export default function formatReleaseDate(releaseDate: string) {
  const dateToArr = releaseDate.split("-");
  const day = dateToArr[2];
  const year = dateToArr[0];
  const month = parseInt(dateToArr[1]);

  return `${Months[month]} ${day}, ${year}`;
}
