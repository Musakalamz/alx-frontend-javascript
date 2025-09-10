interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]. ${lastName}}`;
}
