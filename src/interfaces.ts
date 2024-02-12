export interface HomePageProps {
  welcome: string;
  description: string;
  link: string;
  history: string;
  mission: string;
}

export interface ContactPageProps {
  title: string;
  subTitle: string;
  location: {
    title: string;
    address: string;
    mapLink: string;
  };
  contactDetails: {
    phone: {
      title: string;
      number: string;
    };
    email: {
      title: string;
      address: string;
    };
  };
  hours: {
    title: string;
    schedule: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };
}

export interface CatalogPageProps {
  title: string;
  subTitle: string;
  cars: CarProps[];
}

export interface CarProps {
  id: string;
  make: string;
  model: string;
  year: number;
  price: string;
  description: string;
}
