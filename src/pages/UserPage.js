import PetsData from 'components/UserPage/PetsData/PetsData';
import UserData from 'components/UserPage/UserData/UserData';
import Logout from 'components/UserPage/UserData/LogOut/LogOut';
import UserFoto from 'components/UserPage/UserData/UserFoto/UserFoto.jsx';
import EditFoto from 'components/UserPage/UserData/EditFoto/EditFoto.jsx';
import css from './UserPage.module.css';
import { useState, useEffect } from 'react';
import { fetchUserAndPets } from '../utilities/helpers';
import { selectors } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function UserPage() {
  const [userAndPets, setUserAndPets] = useState([]);
  const [userFoto, setUserFoto] = useState(null);

  const token = useSelector(selectors.getToken);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUserAndPets(token);
      setUserAndPets(response);
      return;
    };
    fetchData().catch(console.error);
  }, [token]);

  const { pets, user } = userAndPets;

  return (
      <div className={css.container}>

        {user && (
          // <div className={css.container_userInfo}>
          <>

            <h2 className={css.title}>My information:</h2>
            <div className={css.container__userdata}>
            <div className={css.container_tablet}>
            <UserFoto userFoto={userFoto} user={user} />
            <EditFoto setUserFoto={setUserFoto} />
            </div>
            <div className={css.container_tablet_tab}>
            <UserData user={user} />
            <Logout />
            </div>
            </div>
          </>
            // </div>
            )}

        {pets && (
          <div className={css.container_pets}>
            <h2 className={css.title}>My pets:</h2>
            <div className={css.container__petsdata}>
              <PetsData pets={pets} />
            </div>
          </div>
         )}

    </div>)}

