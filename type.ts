export interface IFormInput {
  FirstName: string;
  LastName: string;
}

export interface DataCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  isActive: boolean;
}

export interface PaginationProps {
  pages: number;
  setPagination: (page: number) => void;
  pagination: number;
}

export interface TableProps {
  data: UserData[];
  tableTitle?: string;
}
