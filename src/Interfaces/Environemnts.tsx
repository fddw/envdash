export type Environment = {
  name: string;
  state: string;
  toggle: boolean;
  applications: Application[];
  databases: Database[];
}

export type Application = {
  name: string;
  state: string;
  toggle: boolean;
}

export type Database = {
  name: string;
  state: string;
  engine: string;
  toggle: boolean;
}
