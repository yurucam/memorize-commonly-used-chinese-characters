import { useTranslation } from 'react-i18next';
import { IoAddOutline } from 'react-icons/io5';
import { useState } from 'react';
import { Konsta } from '../../ui';
import { MyGroupListTab } from './tabs/my-group-list.tab';
import { GroupShareCenterTab } from './tabs/group-share-center.tab';

export const Home = () => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Konsta.Page>
        <Konsta.Navbar title={t('home.title')} />

        {tabIndex === 0 && <MyGroupListTab />}
        {tabIndex === 1 && <GroupShareCenterTab />}

        <Konsta.Tabbar labels={true} icons={true} className="left-0 bottom-0 fixed">
          <Konsta.TabbarLink
            key={1}
            active={tabIndex === 0}
            label={t('home.my-group-list')}
            icon={<Konsta.Icon ios={<IoAddOutline size={24} />} />}
            onClick={() => setTabIndex(0)}
          />
          <Konsta.TabbarLink
            key={2}
            active={tabIndex === 1}
            label={t('home.group-share-center')}
            icon={<Konsta.Icon ios={<IoAddOutline size={24} />} />}
            onClick={() => setTabIndex(1)}
          />
        </Konsta.Tabbar>
      </Konsta.Page>
    </>
  );
};
