import { Page } from '../UI/Page';
import { Edges } from '../UI/Edges';
import Title from '../UI/Title';
import Subtitle from '../UI/Subtitle';
import ThreeTicks from '../UI/ThreeTicks';
import DeleteMe from '../../components/UI/DeleteMe';
import InfoItem from '../UI/InfoItem';
import Button from '../UI/Button';
import Modal from '../Modal';
import Grid from '../UI/Grid';
import FormControlLabel from '../UI/FormControlLabel';
import Checkbox from '../UI/Checkbox';
import InputText from '../Input/InputText';
import { useCallback, useState } from 'react';
import s from './style/index.module.scss';
import SearchBox from '../UI/SearchBox';
import { PatientGroupMenu } from './Menu'
import PatGroupModal from './Modal';
import Menu from '../UI/Menu';

function PatientGroup() {

  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback((e) => {
    setShowModal((prevSt) => !prevSt)
  },
    []);

  const closeModal = useCallback(
    (e) => {
      setShowModal(false)
    },
    [setShowModal],
  )

  const [selectAll, setSelectAll] = useState(true)
  // start deleteME
  const [trialChecked, setTrialChecked] = useState(false)
  // end of deleteMe


  return (
    // if we return a react fragment, it creates a page component using same method of creating modal portal
    <div>
      <Page>
        <Page.Header>
          <Edges
            right={
              <>
                <Title>
                  متابعة تقويم
                </Title>
                <Subtitle>
                  72 مريضا
                </Subtitle>
              </>
            }

            left={
              <ThreeTicks
                menu={<PatientGroupMenu />}
              />
            }


          />
        </Page.Header>
        <Page.Body>
          <Menu
            gutterBottom
          >
            <li>
              <InfoItem right="بسملة علي" left="+201056662381" />

            </li>
            <li>
              <InfoItem right="سمير شهير" left="+201056662381" />

            </li>
          </Menu>
        </Page.Body>

        <Page.Footer
          className={s.patGroupFooter}
        >
          <Button
            variant="link"
            onClick={toggleModal}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -5 24 24"
                width="24px"
                fill="currentColor"
              ><rect fill="none" height="24" width="24" /><path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" /></svg>
            </span>
            اظهار المزيد

          </Button>
        </Page.Footer>
      </Page>

      {/* if we don't use "div" or any other wrapper component */}
      {/* bug: create a a header and body components of "page" component beside modal components  */}
      <PatGroupModal
        show={showModal}
        onClose={closeModal}
      />
    </div>
  )
}

export default PatientGroup
