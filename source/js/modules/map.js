export function initMap() {
  if (window.ymaps) {
    const ymaps = window.ymaps;
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: [59.938635, 30.323118],
        zoom: 15,
      });
      let placemark = new ymaps.Placemark([59.937468, 30.322623], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/iconMap.svg',
        iconImageSize: [18, 22],
        iconImageOffset: [-19, 10],
      });


      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      map.geoObjects.add(placemark);
    });
  }
}
