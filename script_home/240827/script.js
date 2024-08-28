const showPosition=(position)=>{
    const url = "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=apptest&serviceKey=VM9p5UzYVVAtNfVOhkqS6BjeawIol9oKvVDS51E%2B9dR0cnaNt%2BFgfy64i2YREepO4Hn%2FOG6uIOGZdMVuwNFheA%3D%3D&_type=json";
fetch(url)
.then((response)=>response.json())
.then((json)=>{
    const data = json.resposne.body.items.item;
    console.log(data);
    const {latitude,longitude}=position.coords;

    const mapContainer = document.querySelector("#map");
    const mapOption = { 
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);

    const clusterer = new kakao.maps.MarketClusterer({
        map:map,
        averageCenter: true,
        minLevel: 10,
    });

    let markers =[];

    for (var i = 0; i < data.length; i ++) {
        const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
        });

    markers.push(marker);

    const infowindow = new kakao.maps.infowindow({
        content: data[i].facltNm,
    });

    const makeOverListener = (map, marker, infowindow)=>{
        return()=>{
            infowindow.open(map,marker);
        };
    };

    const makeOutListener = (infowindow) =>{
        return()=>{
            infowindow.close();
        };
    };
    
    kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
    );

    kakao.maps.event.addlListener(
        marker,
        "mouseover",
        makeOutListener(infowindow)
    );
}
clusterer.addMarkers(markers);
});
};
   
const errorPosition=(err) =>{
        alert(err.message);
    };
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,errorPosition);
    }else{
        alert("Geolocation을 지원하지 않는 기기입니다.");
    }