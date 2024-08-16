import { useState } from 'react';

import './App.css';

function App() {
  const [countryArr, setCountryArr] = useState([]);

  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  // 국가 추가
  // 원래 있던 배열에 새로 만든 객체 추가
  // ...

  // 국가명이 공백일 경우 alert 아니면 추가
  const addCountryBtn = () => {
    if (country.length === 0) {
      alert('국가명을 입력해주세요');
    } else {
      const 추가 = {
        name: country,
        gold,
        silver,
        bronze,
      };

      const 새배열 = [...countryArr, 추가];
      setCountryArr(새배열);
    }
  };

  // 업데이트
  const updateCountryBtn = (event) => {
    event.preventDefault();

    // input창에 입력한 name과 countryArr에 있는 country가 같으면 true!
    // => find!!!!!!
    // 같은 거 찾았으면 그걸로 map 돌려서 각각 메달 개수 수정

    const 비교 = countryArr.find(function (대상) {
      if (country === 대상.name) {
        return true;
      } else {
        return false;
      }
    });

    // 국가명을 제외한 메달 개수만 수정해야 됨
    const 수정 = countryArr.map(function (대상) {
      if (비교.name === 대상.name) {
        return {
          ...대상,
          gold,
          silver,
          bronze,
        };
      } else {
        return 대상;
      }
    });

    setCountryArr(수정);
  };

  // 삭제하기
  // 필터로 country.name과 같으면 false
  const deleteCountryBtn = ({ name }) => {
    const 삭제 = countryArr.filter(function (대상) {
      if (대상.name === name) {
        return false;
      } else {
        return true;
      }
    });
    setCountryArr(삭제);
  };

  return (
    <>
      <h1>2024 파리 올림픽</h1>
      <div className="inputBox">
        <div>
          <p>국가명</p>
          <input
            type="text"
            placeholder="국가 입력"
            value={country}
            onChange={function (e) {
              const 인풋값 = e.target.value;
              setCountry(인풋값);
            }}
          />
        </div>
        <div>
          <p>금메달</p>
          <input
            type="number"
            value={gold}
            onChange={function (e) {
              const 인풋값 = e.target.value;
              setGold(인풋값);
            }}
          />
        </div>
        <div>
          <p>은메달</p>
          <input
            type="number"
            value={silver}
            onChange={function (e) {
              const 인풋값 = e.target.value;
              setSilver(인풋값);
            }}
          />
        </div>
        <div>
          <p>동메달</p>
          <input
            type="number"
            value={bronze}
            onChange={function (e) {
              const 인풋값 = e.target.value;
              setBronze(인풋값);
            }}
          />
        </div>
        <button onClick={addCountryBtn} type="submit">
          국가 추가
        </button>
        <button onClick={updateCountryBtn} type="submit">
          업데이트
        </button>
      </div>
      {/* 이 아래에 리스트 출력 */}
      <div>
        {countryArr.map(function (인풋값) {
          return (
            <>
              <table>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <tr key={인풋값.name}></tr>
                <td>{인풋값.name}</td>
                <td>{인풋값.gold}</td>
                <td>{인풋값.silver}</td>
                <td>{인풋값.bronze}</td>
                <button
                  onClick={function () {
                    deleteCountryBtn(인풋값);
                  }}
                  type="submit"
                >
                  삭제
                </button>
              </table>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
