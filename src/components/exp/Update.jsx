import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

const columns = [
  {
    title: '레벨',
    dataIndex: 'level'
  },
  {
    title: '필요경험치',
    dataIndex: 'needExp',
  }];

class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [{
        level: 200,
        needExp: "2,207,026,470"
      },
      {
        level: 201,
        needExp: "2,471,869,646"
      },
      {
        level: 202,
        needExp: "2,768,494,003"
      },
      {
        level: 203,
        needExp: "3,100,713,283"
      },
      {
        level: 204,
        needExp: "3,472,798,876"
      },
      {
        level: 205,
        needExp: "3,889,534,741"
      },
      {
        level: 206,
        needExp: "4,356,278,909"
      },
      {
        level: 207,
        needExp: "4,879,032,378"
      },
      {
        level: 208,
        needExp: "5,464,516,263"
      },
      {
        level: 209,
        needExp: "6,120,258,214"
      },
      {
        level: 210,
        needExp: "9,792,413,142"
      },
      {
        level: 211,
        needExp: "10,869,578,587"
      },
      {
        level: 212,
        needExp: "12,065,232,231"
      },
      {
        level: 213,
        needExp: "13,392,407,776"
      },
      {
        level: 214,
        needExp: "14,865,572,631"
      },
      {
        level: 215,
        needExp: "19,325,244,420"
      },
      {
        level: 216,
        needExp: "21,064,516,417"
      },
      {
        level: 217,
        needExp: "22,960,322,894"
      },
      {
        level: 218,
        needExp: "25,026,751,954"
      },
      {
        level: 219,
        needExp: "27,279,159,629"
      },
      {
        level: 220,
        needExp: "43,646,655,406"
      },
      {
        level: 221,
        needExp: "46,701,921,284"
      },
      {
        level: 222,
        needExp: "49,971,055,773"
      },
      {
        level: 223,
        needExp: "53,469,029,677"
      },
      {
        level: 224,
        needExp: "57,211,861,754"
      },
      {
        level: 225,
        needExp: "74,375,420,280"
      },
      {
        level: 226,
        needExp: "78,094,191,294"
      },
      {
        level: 227,
        needExp: "81,998,900,858"
      },
      {
        level: 228,
        needExp: "86,098,845,900"
      },
      {
        level: 229,
        needExp: "90,403,788,195"
      },
      {
        level: 230,
        needExp: "144,646,061,112"
      },
      {
        level: 231,
        needExp: "148,985,442,945"
      },
      {
        level: 232,
        needExp: "153,455,006,233"
      },
      {
        level: 233,
        needExp: "158,058,656,419"
      },
      {
        level: 234,
        needExp: "162,800,416,111"
      },
      {
        level: 235,
        needExp: "211,640,540,944"
      },
      {
        level: 236,
        needExp: "217,989,757,172"
      },
      {
        level: 237,
        needExp: "224,529,449,887"
      },
      {
        level: 238,
        needExp: "231,265,333,383"
      },
      {
        level: 239,
        needExp: "238,203,293,384"
      },
      {
        level: 240,
        needExp: "381,125,269,414"
      },
      {
        level: 241,
        needExp: "392,559,027,496"
      },
      {
        level: 242,
        needExp: "404,335,798,320"
      },
      {
        level: 243,
        needExp: "416,465,872,269"
      },
      {
        level: 244,
        needExp: "428,959,848,437"
      },
      {
        level: 245,
        needExp: "557,647,802,968"
      },
      {
        level: 246,
        needExp: "574,377,237,057"
      },
      {
        level: 247,
        needExp: "591,608,554,168"
      },
      {
        level: 248,
        needExp: "609,356,810,793"
      },
      {
        level: 249,
        needExp: "627,637,515,116"
      },
      {
        level: 250,
        needExp: "1,313,764,762,354"
      },
      {
        level: 251,
        needExp: "1,326,902,409,977"
      },
      {
        level: 252,
        needExp: "1,340,171,434,076"
      },
      {
        level: 253,
        needExp: "1,353,573,148,416"
      },
      {
        level: 254,
        needExp: "1,367,108,879,900"
      },
      {
        level: 255,
        needExp: "1,380,779,968,699"
      },
      {
        level: 256,
        needExp: "1,394,587,768,385"
      },
      {
        level: 257,
        needExp: "1,408,533,646,068"
      },
      {
        level: 258,
        needExp: "1,422,618,982,528"
      },
      {
        level: 259,
        needExp: "1,436,845,172,353"
      },
      {
        level: 260,
        needExp: "2,902,427,248,153"
      },
      {
        level: 261,
        needExp: "2,931,451,520,634"
      },
      {
        level: 262,
        needExp: "2,960,766,035,840"
      },
      {
        level: 263,
        needExp: "2,990,373,696,198"
      },
      {
        level: 264,
        needExp: "3,020,277,433,159"
      },
      {
        level: 265,
        needExp: "3,050,480,207,490"
      },
      {
        level: 266,
        needExp: "3,080,985,009,564"
      },
      {
        level: 267,
        needExp: "3,111,794,859,659"
      },
      {
        level: 268,
        needExp: "3,142,912,808,255"
      },
      {
        level: 269,
        needExp: "3,174,341,936,337"
      },
      {
        level: 270,
        needExp: "6,412,170,711,400"
      },
      {
        level: 271,
        needExp: "6,476,292,418,514"
      },
      {
        level: 272,
        needExp: "6,541,055,342,699"
      },
      {
        level: 273,
        needExp: "6,606,465,896,125"
      },
      {
        level: 274,
        needExp: "6,672,530,555,086"
      },
      {
        level: 275,
        needExp: "13,478,511,721,273"
      },
      {
        level: 276,
        needExp: "14,826,362,893,400"
      },
      {
        level: 277,
        needExp: "16,308,999,182,740"
      },
      {
        level: 278,
        needExp: "17,939,899,101,014"
      },
      {
        level: 279,
        needExp: "19,733,889,011,115"
      },
      {
        level: 280,
        needExp: "39,862,455,802,452"
      },
      {
        level: 281,
        needExp: "43,848,701,382,697"
      },
      {
        level: 282,
        needExp: "48,233,571,520,966"
      },
      {
        level: 283,
        needExp: "53,056,928,673,062"
      },
      {
        level: 284,
        needExp: "58,362,621,540,368"
      },
      {
        level: 285,
        needExp: "117,892,495,511,543"
      },
      {
        level: 286,
        needExp: "129,681,745,062,697"
      },
      {
        level: 287,
        needExp: "142,649,919,568,966"
      },
      {
        level: 288,
        needExp: "172,606,402,678,448"
      },
      {
        level: 289,
        needExp: "348,664,933,410,464"
      },
      {
        level: 290,
        needExp: "383,531,426,751,510"
      },
      {
        level: 292,
        needExp: "421,884,569,426,661"
      },
      {
        level: 293,
        needExp: "464,073,026,369,327"
      },
      {
        level: 294,
        needExp: "510,480,329,006,259"
      },
      {
        level: 295,
        needExp: "1,031,170,264,592,643"
      },
      {
        level: 296,
        needExp: "1,134,287,291,051,907"
      },
      {
        level: 297,
        needExp: "1,247,716,020,157,097"
      },
      {
        level: 298,
        needExp: "1,372,487,622,172,806"
      },
      {
        level: 299,
        needExp: "2,058,731,433,259,209"
      }
    ]

    };
  }

  render() {
    const { dataSource } = this.state;

    return (

      <div>
        dsadas
        <Table
          pagination={false}
          dataSource={dataSource}
          columns={columns}
          components={{
            body: {
              wrapper: this.DraggableContainer,
              row: this.DraggableBodyRow,
            },
          }}
        />
      </div>

    );
  }
}

export default Update;
