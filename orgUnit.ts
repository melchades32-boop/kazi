interface OrgUnit {
  id: string;
  name: string;
  parentId?: string;
  children?: OrgUnit[];
}
