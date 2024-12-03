import { usePGlite } from '@electric-sql/pglite-react';
import { useGroupRepo } from '../../../database/group.repo';

export const MyGroupListTab = () => {
  const db = usePGlite();
  const groupRepo = useGroupRepo(db);

  groupRepo.findAll();

  return <>my group list tab</>;
};
