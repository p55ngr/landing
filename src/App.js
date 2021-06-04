import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Alert,
  Container,
  Modal,
  Input,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Select from "react-select";
import close from "./assets/close.png";
import logo from "./assets/logo.png";
import rider from "./assets/rider.png";
import Decon from "./assets/Decon.png";
import money from "./assets/money.png";
import start from "./assets/start.png";
import car from "./assets/car.png";
import classImg from "./assets/classImg.png";
import dish from "./assets/dish.png";
import startup from "./assets/startup.png";
import support from "./assets/support.png";
import system from "./assets/system.png";
import Chef from "./assets/Chef.png";
import time from "./assets/time.png";
import home from "./assets/home.png";
import job from "./assets/job.png";
import Flickity from "flickity";
import square from "./assets/square.png";
import "./app.scss";

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function App() {
  var flkty = new Flickity(".carousel", {
    // Настройки плагина
    cellAlign: "center",
    contain: true,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [application, setApplication] = useState({});
  const [isMenu, setIsMenu] = useState(true);

  const positions = [
    { label: "Cушист", value: 0 },
    { label: "Пиццерист", value: 2 },
    { label: "Повар горячего цеха", value: 3 },
    { label: "Помошник повара", value: 4 },
    { label: "Кухонный работник", value: 5 },
    { label: "Оператор", value: 6 },
    { label: "Посудомойщица", value: 7 },
    { label: "Уборщица", value: 8 },
    { label: "Курьер/ водителем с л/a", value: 9 },
    { label: "Кассир", value: 10 },
  ];
  const citys = [
    { label: "Казань", value: 0 },
    { label: "Набережные Челны", value: 1 },
    { label: "Нижнекамск", value: 2 },
    { label: "Нижний Новгород", value: 3 },
    { label: "Чебоксары", value: 4 },
    { label: "Йошкар-Ола", value: 5 },
    { label: "Ярославль", value: 6 },
  ];
  return (
    <div className="App" id="app">
      <Modal isOpen={isOpen}>
        <ModalBody>
          <Row>
            <Col lg="12" className="modal_title">
              Заполнить анкету
            </Col>
            <div className="modal_item">
              <Row>
                <Col lg="6" className="modal_item_title" xs="4">
                  Вакансия
                </Col>
                <Col lg="6" xs="8">
                  <Select
                    options={positions}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    placeholder={"Выберите"}
                    onChange={(e) =>
                      setApplication({ ...application, position: e.value })
                    }
                    value={positions[application.position] || ""}
                  ></Select>
                </Col>
              </Row>
            </div>
            <div className="modal_item">
              <Row>
                <Col lg="6" className="modal_item_title" xs="4">
                  Город
                </Col>
                <Col lg="6" xs="8">
                  <Select
                    options={citys}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    placeholder={"Выберите"}
                    onChange={(e) =>
                      setApplication({ ...application, city: e.value })
                    }
                    value={citys[application.city] || ""}
                  ></Select>
                </Col>
              </Row>
            </div>
            <div className="modal_item">
              <Row>
                <Col lg="6" className="modal_item_title" xs="4">
                  ФИО
                </Col>
                <Col lg="6" xs="8">
                  <Input
                    onChange={(e) =>
                      setApplication({ ...application, name: e.target.value })
                    }
                    value={application.name || ""}
                  ></Input>
                </Col>
              </Row>
            </div>
            <div className="modal_item">
              <Row>
                <Col lg="6" className="modal_item_title" xs="4">
                  Дата рождения
                </Col>
                <Col lg="6" xs="8">
                  <Input
                    onChange={(e) =>
                      setApplication({ ...application, birth: e.target.value })
                    }
                    value={application.birth || ""}
                  ></Input>
                </Col>
              </Row>
            </div>
            <div className="modal_item">
              <Row>
                <Col lg="6" className="modal_item_title" xs="4">
                  Гражданство
                </Col>
                <Col lg="6" xs="8">
                  <Input
                    onChange={(e) =>
                      setApplication({
                        ...application,
                        citizenship: e.target.value,
                      })
                    }
                    value={application.citizenship || ""}
                  ></Input>
                </Col>
              </Row>
            </div>
            <div className="modal_item">
              <Row>
                <Col lg="6" className="modal_item_title" xs="4">
                  Наличие медицинской книжки
                </Col>
                <Col lg="6" xs="8">
                  <Input
                    onChange={(e) =>
                      setApplication({ ...application, med: e.target.value })
                    }
                    value={application.med || ""}
                  ></Input>
                </Col>
              </Row>
            </div>
            <div className="modal_item">
              <Row>
                <Col lg="6" className="modal_item_title" xs="4">
                  Расскажи о себе
                </Col>
                <Col lg="6" xs="8">
                  <Input
                    onChange={(e) =>
                      setApplication({ ...application, about: e.target.value })
                    }
                    value={application.about || ""}
                  ></Input>
                </Col>
              </Row>
            </div>
            <div className="modal_item">
              <Row>
                <Col lg="6" className="modal_item_title" xs="4">
                  Телефон
                </Col>
                <Col lg="6" xs="8">
                  <Input
                    onChange={(e) =>
                      setApplication({ ...application, phone: e.target.value })
                    }
                    value={application.phone || ""}
                  ></Input>
                </Col>
              </Row>
            </div>

            <Row></Row>
          </Row>
        </ModalBody>
        <ModalFooter
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            className="modal_footer-close"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            Закрыть
          </div>
          <div
            className="modal_footer-submit"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            Отправить
          </div>
        </ModalFooter>
      </Modal>
      <div className="menu mobile">
        {isMenu ? (
          <img src={close} onClick={(e) => setIsMenu(false)}></img>
        ) : (
          <img src={square} onClick={(e) => setIsMenu(true)}></img>
        )}
      </div>
      {isMenu === true && (
        <div className="mobile openedMenu">
          <div className="openedMenu_links mobile">
            <a href="#app" onClick={(e) => setIsMenu(false)}>
              Главная{" "}
            </a>
            <a href="#about" onClick={(e) => setIsMenu(false)}>
              О нас{" "}
            </a>
            <a href="#team" onClick={(e) => setIsMenu(false)}>
              Команда{" "}
            </a>
            <a href="#galery" onClick={(e) => setIsMenu(false)}>
              Галерея{" "}
            </a>
            <a href="#app" onClick={(e) => setIsMenu(false)}>
              Контакты
            </a>
          </div>
        </div>
      )}

      <Container>
        <Row>
          <Col className="navbar nav">
            <img src={logo} className="logo"></img>
            <div className="links screen">
              <a href="#app">Главная </a>
              <a href="#about">О нас </a>
              <a href="#team">Команда </a>
              <a href="#galery">Галерея </a>
              <a href="#app">Контакты</a>
            </div>
            <div
              className="application button screen"
              onClick={(e) => setIsOpen(true)}
            >
              Оставить заявку
            </div>
          </Col>
        </Row>
      </Container>
      <div className="divider"></div>
      <Container>
        <Row>
          <div className="hero">
            <Row>
              <Col className="hero_text" lg="6" xs="12">
                <div className="hero_text-top">
                  СТАНЬ ЧАСТЬЮ БОЛЬШОЙ И ДРУЖНОЙ КОМАНДЫ КОМПАНИИ «РАДУГА ВКУСА»
                </div>
                <div
                  className="hero_text_button button screen "
                  onClick={(e) => setIsOpen(true)}
                >
                  Хочу работать в компании
                </div>
              </Col>
              <Col className="hero_image" lg="6" xs="12">
                <img src={rider}></img>
              </Col>
              <Col>
                <div
                  className="hero_text_button button mobile"
                  onClick={(e) => setIsOpen(true)}
                >
                  Хочу работать в компании
                </div>
              </Col>
            </Row>
          </div>
        </Row>
        <Row id="about">
          <div className="secondBlock">
            <Row>
              <Col className="secondBlock_text mobile" lg="6" xs="12">
                Динамично развивающаяся федеральная сеть доставки еды «Радуга
                Вкуса» начала свою историю в далеком 2011 году. Мы долго и
                упорно, шаг за шагом шли к своим целям, достигали высокого
                стандарта качества наших блюд. И неудивительно, что на данный
                момент в нашей команде работают более 1000 сотрудников в 6
                городах России, ежемесячно мы доставляем более 100000 заказов и
                наша компания известна замечательным вкусом наших фирменных блюд
                и отличным соотношением цены и качества.{" "}
              </Col>
              <Col className="secondBlock_image" lg="6" xs="12">
                <img src={Decon}></img>
              </Col>
              <Col className="secondBlock_text screen" lg="6" xs="12">
                Динамично развивающаяся федеральная сеть доставки еды «Радуга
                Вкуса» начала свою историю в далеком 2011 году. Мы долго и
                упорно, шаг за шагом шли к своим целям, достигали высокого
                стандарта качества наших блюд. И неудивительно, что на данный
                момент в нашей команде работают более 1000 сотрудников в 6
                городах России, ежемесячно мы доставляем более 100000 заказов и
                наша компания известна замечательным вкусом наших фирменных блюд
                и отличным соотношением цены и качества.{" "}
              </Col>
            </Row>
          </div>
          <Col lg="12" className="secondBlock_bottom" xs="12">
            И мы не желаем останавливаться на достигнутом!
          </Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col lg="10" className="firdBlock">
            <div className="firdBlock_text">
              Ты полон энергии и энтузиазма? У тебя нет опыта работы, но ты
              хочешь профессионально развиваться? Ты готов к получению новых
              знаний? Тогда присоединяйся к нам! Ты кардинально изменишь свою
              жизнь»
            </div>
          </Col>
        </Row>
        <Row id="team">
          <div className="fourthBlock">
            <Row>
              <Col lg="12" className="block-top_text">
                <div className="block-top_text">В нашей команде тебя ждет:</div>
              </Col>
              <Col lg="6">
                <div className="fourthBlock_item">
                  <div>
                    <img src={money} className="fourthBlock_item_image"></img>
                  </div>

                  <div className="fourthBlock_item-top">
                    Стабильная зарплата
                  </div>
                  <div className="fourthBlock_item-bottom">
                    (При любой ситуации ты всегда можешь на нее рассчитывать)
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="fourthBlock_item">
                  <div
                    style={{
                      height: "200px ",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={start} className="fourthBlock_item_image"></img>
                  </div>

                  <div className="fourthBlock_item-top">
                    Оплата на начальном этапе
                  </div>
                  <div className="fourthBlock_item-bottom">
                    (Да-да, мы оплачиваем стажировку. Учись и зарабатывай!)
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="fourthBlock_item">
                  <img src={classImg} className="fourthBlock_item_image"></img>
                  <div className="fourthBlock_item-top">
                    Обучение с опытным наставником компании
                  </div>
                  <div className="fourthBlock_item-bottom">
                    Пошаговое введение в должность с наставником, что в целом
                    ускоряет процесс обучения и усвоения информации)
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="fourthBlock_item">
                  <img src={dish} className="fourthBlock_item_image"></img>
                  <div className="fourthBlock_item-top">Бесплатное питание</div>
                  <div className="fourthBlock_item-bottom">
                    (Мы кормим вкусно и бесплатно! Обед и ужин за счет компании)
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="fourthBlock_item">
                  <img src={startup} className="fourthBlock_item_image"></img>
                  <div className="fourthBlock_item-top">Карьерный рост</div>
                  <div className="fourthBlock_item-bottom">
                    (Ты сможешь пройти путь от начинающего специалиста до
                    управляющего)
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="fourthBlock_item">
                  <img src={system} className="fourthBlock_item_image"></img>
                  <div className="fourthBlock_item-top">
                    Четкое разделение труда
                  </div>
                  <div className="fourthBlock_item-bottom">
                    (Каждый занимается своей работой и выполняет свои
                    функции,что в целом облегчает весь процесс работы в команде)
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="fourthBlock_item">
                  <div className="fourthBlock_item_imgBlock">
                    <img src={car} className="fourthBlock_item_image"></img>
                  </div>

                  <div className="fourthBlock_item-top">Развод до дома</div>
                  <div className="fourthBlock_item-bottom">
                    (Бесплатно развозим сотрудников после вечерней смены до
                    дома)
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="fourthBlock_item">
                  <img src={support} className="fourthBlock_item_image"></img>
                  <div className="fourthBlock_item-top">Дружная команда</div>
                  <div className="fourthBlock_item-bottom">
                    Ты попадешь в коллектив, где ценят и уважают каждого
                    сотрудника и помогают друг другу развивать профессиональные
                    качества)
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="fithBlock">
              <Col lg="12" xs="12">
                <div className="block-top_text"> Не просто работа</div>
              </Col>

              <div style={{ display: "flex", alignItems: "center" }}>
                <Row>
                  <Col lg="6" xs="12" className="fithBlock_bot mobile">
                    Наши сотрудники-самая большая ценность для компании. Мы
                    ценим труд, стремление и добросовестное отношение к работе.
                    Нам не важен Твой пол, национальность или образование.
                    Всему, что знаем сами- мы тебя научим. А наставники из
                    нашего учебного центра помогут быстро адаптироваться к
                    условиям труда в компании.
                  </Col>
                  <Col lg="6" xs="12" className="fithBlock_img">
                    <img src={Chef}></img>
                  </Col>
                  <Col lg="6" xs="12" className="fithBlock_bot screen">
                    Наши сотрудники-самая большая ценность для компании. Мы
                    ценим труд, стремление и добросовестное отношение к работе.
                    Нам не важен Твой пол, национальность или образование.
                    Всему, что знаем сами- мы тебя научим. А наставники из
                    нашего учебного центра помогут быстро адаптироваться к
                    условиям труда в компании.
                  </Col>
                </Row>
              </div>
            </Row>{" "}
            <Row className="sixBlock" id="galery">
              <Col lg="12" className="block-top_text" xs="12">
                Мы строим дружеские отношения в коллективе и считаем, что
                работа- наш второй дом! Убедись в этом сам!
              </Col>

              <div class="carousel" data-flickity>
                <img src={car} class="carousel-cell"></img>
                <img src={car} class="carousel-cell"></img>
                <img src={car} class="carousel-cell"></img>
                <img src={car} class="carousel-cell"></img>
              </div>
            </Row>
          </div>
        </Row>
        <Row>
          <div className="seventhBlock">
            <Row>
              <Col lg="12" className="seventhBlock_text">
                Открытые вакансии в городе
              </Col>
              <Col
                lg={{ size: 4, offset: 4 }}
                xs="12"
                className="seventhBlock_town"
              >
                Йошкар-Ола
              </Col>
              <Row>
                <Col lg="4" className="seventhBlock_button">
                  <p className="active">Водитель-курьер</p>
                </Col>
                <Col lg="4" className="seventhBlock_button">
                  <p>Стажер повара (украшение роллов)</p>
                </Col>
                <Col lg="4" className="seventhBlock_button">
                  <p>Работа сегодня</p>
                </Col>
              </Row>
              <Row>
                <Col lg="4" className="seventhBlock_bottom">
                  <img src={time}></img>
                  <p className="seventhBlock_bottom_title">МЫ ПРЕДЛАГАЕМ:</p>
                  <div className="seventhBlock_bottom_list">
                    <p>•Ежедневная оплата от 120-190 за адрес;</p>
                    <p>•Постоянную и равномерную занятость;</p>
                    <p>•Дружный коллектив;</p>
                    <p>•Гибкий график работы;</p>
                  </div>
                </Col>
                <Col lg="4" className="seventhBlock_bottom">
                  <img src={home}></img>
                  <p className="seventhBlock_bottom_title">
                    ДОЛЖНОСТНЫЕ ОБЯЗАННОСТИ:
                  </p>
                  <div className="seventhBlock_bottom_list">
                    <p>•Ловить «зеленую волну» при 10-ти бальных пробках;</p>
                    <p>•В совершенстве знать свой город;</p>
                    <p>•Грамотно и вежливо вести диалог с нашими клиентами;</p>
                  </div>
                </Col>
                <Col lg="4" className="seventhBlock_bottom">
                  <img src={job}></img>
                  <p className="seventhBlock_bottom_title">ТРЕБОВАНИЯ:</p>
                  <div className="seventhBlock_bottom_list">
                    <p>
                      •Собственный автомобиль, водительские права категории B;
                    </p>
                    <p>•Стаж вождения от 2 лет;</p>
                    <p>Виртуозное вождение автомобиля;</p>
                    <p>
                      •Способность быстро ориентироваться в любых дорожных
                      ситуациях;
                    </p>
                  </div>
                </Col>
              </Row>
            </Row>
          </div>
        </Row>

        <Row>
          <div className="footer">
            <Row>
              <Col
                sm="12"
                md={{ size: 6, offset: 3 }}
                className="footer_button button"
                onClick={(e) => setIsOpen(true)}
              >
                Заполнить анкету
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
