// 지도의 위도& 경도 console에 찾아옴
const showPosition = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=VM9p5UzYVVAtNfVOhkqS6BjeawIol9oKvVDS51E%2B9dR0cnaNt%2BFgfy64i2YREepO4Hn%2FOG6uIOGZdMVuwNFheA%3D%3D&_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const data = json.response.body.items.item;
      console.log(data);
      const { latitude, longitude } = position.coords;
      // 원래대로는 이렇게 써야함const latitude = position.coords.latitude;
      // console.log(latitude, lon);

      const mapContainer = document.querySelector("#map");
      // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(latitude, longitude),
        // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);
      // 지도를 생성합니다

      //클러스터
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      let markers = [];

      for (var i = 0; i < data.length; i++) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
        });

        markers.push(marker);

        const infowindow = new kakao.maps.InfoWindow({
          content: data[i].facltNm,
        });

        const makeOverListener = (map, marker, infowindow) => {
          return () => {
            infowindow.open(map, marker);
          };
        };

        const makeOutListener = (infowindow) => {
          return () => {
            infowindow.close();
          };
        };

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );

        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(infowindow)
        );
      }
      clusterer.addMarkers(markers);
    });
};

const errorPosition = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
} else {
  alert("Geolocation을 지원하지 않는 기기입니다.");
}
