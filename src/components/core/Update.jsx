import React from 'react';
import 'antd/dist/antd.css';
import { Image, Card, Row } from 'antd';

// 전사 12
import hero from "../../assets/images/core/hero.png"
import pala from "../../assets/images/core/pala.png"
import dark_knight from "../../assets/images/core/dark_knight.png"
import soul_master from "../../assets/images/core/soul_master.png"
import mihile from "../../assets/images/core/mihile.png"
import blaster from "../../assets/images/core/blaster.png"
import demon_slayer from "../../assets/images/core/demon_slayer.png"
import demon_avenger from "../../assets/images/core/demon_avenger.png"
import aran from "../../assets/images/core/aran.png"
import kaiser from "../../assets/images/core/kaiser.png"
import adele from "../../assets/images/core/adele.png"
import zero from "../../assets/images/core/zero.png"

// 법사 9
import FP from "../../assets/images/core/FP.png"
import SC from "../../assets/images/core/SC.png"
import bishop from "../../assets/images/core/bishop.png"
import flame_wizard from "../../assets/images/core/flame_wizard.png"
import battle_mage from "../../assets/images/core/battle_mage.png"
import evan from "../../assets/images/core/evan.png"
import luminous from "../../assets/images/core/luminous.png"
import illium from "../../assets/images/core/illium.png"
import kinesis from "../../assets/images/core/kinesis.png"

// 궁수 7
import bow_master from "../../assets/images/core/bow_master.png"
import godbow from "../../assets/images/core/godbow.png"
import pathfinder from "../../assets/images/core/pathfinder.png"
import wind_breaker from "../../assets/images/core/wind_breaker.png"
import wild_hunter from "../../assets/images/core/wild_hunter.png"
import mercedes from "../../assets/images/core/mercedes.png"
import kain from "../../assets/images/core/kain.png"

// 도적
import night_lord from "../../assets/images/core/night_lord.png"
import shadower from "../../assets/images/core/shadower.png"
import dual_blade from "../../assets/images/core/dual_blade.png"
import night_walker from "../../assets/images/core/night_walker.png"
import phantom from "../../assets/images/core/phantom.png"
import cadena from "../../assets/images/core/cadena.png"
import hoyoung from "../../assets/images/core/hoyoung.png"

// 해적
import viper from "../../assets/images/core/viper.png"
import captain from "../../assets/images/core/captain.png"
import cannon_shooter from "../../assets/images/core/cannon_shooter.png"
import striker from "../../assets/images/core/striker.png"
import mechanic from "../../assets/images/core/mechanic.png"
import xenon from "../../assets/images/core/xenon.png"
import eunwol from "../../assets/images/core/eunwol.png"
import angelic_buster from "../../assets/images/core/angelic_buster.png"
import ark from "../../assets/images/core/ark.png"

class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [
        // 전사
        {
          name: "히어로",
          image: hero
        },
        {
          name: "팔라딘",
          image: pala
        },
        {
          name: "다크나이트",
          image: dark_knight
        },
        {
          name: "소울마스터",
          image: soul_master
        },
        {
          name: "미하일",
          image: mihile
        },
        {
          name: "블래스터",
          image: blaster
        },
        {
          name: "데몬슬레이어",
          image: demon_slayer
        },
        {
          name: "데몬어벤져",
          image: demon_avenger
        },
        {
          name: "아란",
          image: aran
        },
        {
          name: "카이저",
          image: kaiser
        },
        {
          name: "아델",
          image: adele
        },
        {
          name: "제로",
          image: zero
        },

        // 법사
        {
          name: "아크메이지(불,독) 불독",
          image: FP
        },
        {
          name: "아크메이지(썬,콜) 썬콜",
          image: SC
        },
        {
          name: "비숍",
          image: bishop
        },
        {
          name: "플레임위자드",
          image: flame_wizard
        },
        {
          name: "배틀메이지",
          image: battle_mage
        },
        {
          name: "에반",
          image: evan
        },
        {
          name: "루미너스",
          image: luminous
        },
        {
          name: "일리움",
          image: illium
        },
        {
          name: "키네시스",
          image: kinesis
        },

        // 궁수
        {
          name: "보우마스터",
          image: bow_master
        },
        {
          name: "신궁",
          image: godbow
        },
        {
          name: "패스파인더",
          image: pathfinder
        },
        {
          name: "윈드브레이커",
          image: wind_breaker
        },
        {
          name: "와일드헌터",
          image: wild_hunter
        },
        {
          name: "메르세데스",
          image: mercedes
        },
        {
          name: "카인",
          image: kain
        },

        // 도적
        {
          name: "나이트로드",
          image: night_lord
        },
        {
          name: "섀도어",
          image: shadower
        },
        {
          name: "듀얼블레이드",
          image: dual_blade
        },
        {
          name: "나이트워커",
          image: night_walker
        },
        {
          name: "팬텀",
          image: phantom
        },
        {
          name: "카데나",
          image: cadena
        },
        {
          name: "호영",
          image: hoyoung
        },

        // 해적
        {
          name: "바이퍼",
          image: viper
        },
        {
          name: "캡틴",
          image: captain
        },
        {
          name: "캐논슈터",
          image: cannon_shooter
        },
        {
          name: "스트라이커",
          image: striker
        },
        {
          name: "메카닉",
          image: mechanic
        },
        {
          name: "제논",
          image: xenon
        },
        {
          name: "은월",
          image: eunwol
        },
        {
          name: "엔젤릭버스터",
          image: angelic_buster
        },
        {
          name: "아크",
          image: ark
        },
      ],
    };
  }

  render() {
    const { dataSource } = this.state;

    return (

      <div>
        <Card title="코어강화" >
          <h2>고유 5차는 강화 순위가 높은 순으로 배열했습니다만 <b>직업마다 차이가 매우 큽니다.
            참고용으로만 보시고 직게나 나무위키를 돌아다니며 찾아보시길 바랍니다.(다른 스킬들은 배치 순서가 강화 순서를 의미하는 게 아니에요)</b><br />
            공용 스킬 중 <b>배경이 있는 것</b>은 강화 순위가 높은 것이고, 아무 처리도 되어있지 않은 스킬은 일단 갈지 말고 가져가야 할 스킬입니다. (언급되지 않은 스킬은 쓰레기거나 자신의 상황에 따라 선택할 스킬입니다)&nbsp;
            <b>파란 글자</b>로 쓰여있는 것은 약식 코가 때 강화할 스킬입니다.

            <br />
            <br />
            
            정렬 순서는 전사 -&gt; 법사 -&gt; 궁수 -&gt; 도적 -&gt; 해적이며 직업명을 검색하여 찾아갈 수 있습니다.
            <br />
            <br />
            출처 : https://www.inven.co.kr/board/maple/2304/26224
          </h2>
          <br />
          <br />

          {dataSource.map(data =>

            <div>
              <h3>{data.name}</h3>
              <Row>
                <Image src={data.image} />
              </Row>
            </div>
          )}


        </Card>

      </div>

    );
  }
}

export default Update;
