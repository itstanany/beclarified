import { useState } from 'react'
import Modal from '../../Modal'
import Checkbox from '../../UI/Checkbox'
import Edges from '../../UI/Edges'
import FormControlLabel from '../../UI/FormControlLabel'
import Grid from '../../UI/Grid'
import InfoItem from '../../UI/InfoItem'
import Menu from '../../UI/Menu'
import SearchBox from '../../UI/SearchBox'
import s from './style/index.module.scss';

function PatGroupModal({
  show = "false",
  onClose = () => ({}),
  ...remaining
}) {
  const [selectAll, setSelectAll] = useState(true)
  // start deleteME
  const [trialChecked, setTrialChecked] = useState(false)
  // end of deleteMe

  return (
    <Modal
      show={show}
      onClose={onClose}
      {
      ...remaining
      }
    >
      <Modal.Header closeButton>
        <Modal.Title>
          متابعة تقويم
        </Modal.Title>
        <Modal.SubTitle>
          50 مريضا
        </Modal.SubTitle>
      </Modal.Header>

      <Modal.Body>

        {/* Actions */}
        <Edges
          right={
            <FormControlLabel>
              <FormControlLabel.Control>
                <Checkbox
                  name="selectAll"
                  id="selectAll"
                  checked={selectAll}
                  onChange={() => setSelectAll((prevSt) => (!prevSt))}
                />
              </FormControlLabel.Control>

              <FormControlLabel.Label>
                إختيار الكل
              </FormControlLabel.Label>
            </FormControlLabel>
          }

          left={
            <div className={s.actionIcons}>
              <span className={s.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" /><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" /></svg>
              </span>
              <span className={s.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" /><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" /></svg>
              </span>
            </div>

          }
        />{/* Search Box */}
        <div>
          <SearchBox />
        </div>

        {/* Patient List */}

        <Menu>

          <li>
            <FormControlLabel>
              <Grid
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
          <li>
            <FormControlLabel>
              <Grid
                // className={s.centerGrid}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Grid.Item xs={1}>
                  <FormControlLabel.Control>
                    <Checkbox
                      name="trial"
                      id="trial"
                      checked={trialChecked}
                      onChange={() => setTrialChecked((prevSt) => !prevSt)}
                      dir="rtl"
                    />
                  </FormControlLabel.Control>
                </Grid.Item>
                <Grid.Item xs={11}>
                  <FormControlLabel.Label>
                    <InfoItem right="سمير شهير" left="+201056662381" />
                  </FormControlLabel.Label>
                </Grid.Item>
              </Grid>
            </FormControlLabel>
          </li>
        </Menu>
      </Modal.Body>

      <Modal.Footer>
        <button>
          Hello Modal Footer
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default PatGroupModal
