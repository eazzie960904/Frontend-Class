//geolocation => 사용자의 위치를 파악하기 위한 목적 API

//getCurrnetPosition(successCB, errorCB, options)

const getlocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도${position.coords.latitude}, 경도${position.coords.longitude}`;
};

const erroPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, erroPosition);

    const options = {
      //많은 건물이 몰려있을때 정확하게 찾아오지 못할 수 있다. 정확하게 만들떄
      enableHighAccuracy: true,
      //빨리 불러오려면 0이 좋다.
      maximumAge: 0,
      timeout: 5000,
    };

    // watchPosition 실시간 위도 경도 가져옴
    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      erroPosition,
      options
    );

    setTimeout(() => {
      //setinterval clearinterval처럼 watchpositon을 clear한다.
      navigator.geolocation.clearWatch();
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다.");
  }
});
