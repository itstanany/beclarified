import Container from '../UI/Container';
import s from './styles/index.module.scss';
import AuthNavItem from './AuthNavItem';
import { Menu } from '../UI/Menu';
import { Anchor } from '../UI/Anchor';
import { Toggler } from '../UI/Toggler';

function Header({ title }) {

  return (
    <section className={s.headerSection}>
      <Container>
        <div className={s.header}>
          <h3 className={s.title}>
            {
              title
            }
          </h3>
          <div>
            <Toggler
              toggler={<a className={s.notIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" height="31px" viewBox="0 0 24 24" width="31px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" /></svg>
                <span>
                  9+
                </span>
              </a>
              }
              menu={(
                <Menu
                  className={s.notMenu}
                >
                  <li>
                    <Anchor
                      href="#"
                    >
                      تذكير: لم يتبق سوي علبه كمامات واحدة فقط في المخزن
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="#">
                      موعد: قامت "هناء" بالغاء موعدها اليوم عن طريق الواتساب
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="#">
                      موعد: قام "أحمد سيد" بتاكيد الموعد عن طريق الواتساب
                    </Anchor>
                  </li>
                  <li>
                    <Anchor href="#">
                      قسط: اليوم هو موعد تحصيل قسط "محاهد عمرو" بقيمة 500 جنيه
                    </Anchor>
                  </li>
                </Menu>
              )}
            />
          </div>
          <div>
            <AuthNavItem />
          </div>
        </div>
      </Container>
    </section >
  )
}

export default Header

