import { Owner } from "./owner";

export class Repository {
  name?: string;
  description?: string;
  owner: Owner = new Owner;
  stargazers_count?: number;
  forks?: number;
}
