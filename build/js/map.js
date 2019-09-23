ymaps.ready(init);    
function init(){ 
var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10
    });

    var myGeoObjects = new ymaps.GeoObjectCollection({}, {
    preset: "islands#redAutoIcon"
    });
    myGeoObjects.add(new ymaps.Placemark([55.801131568944264,37.508166499999994]));
    myGeoObjects.add(new ymaps.Placemark([55.7575560689813,37.65159149999997]));
    myMap.geoObjects.add(myGeoObjects);


    var centerAndZoom = ymaps.util.bounds.getCenterAndZoom(
    myGeoObjects.getBounds(),
    [$(window).width(),$("#map").height()],
    myMap.options.get('projection')
    );  

    if($(window).width()<768){
        myMap.behaviors.disable('scrollZoom'); 
    }   

    myMap.setCenter(centerAndZoom.center, (centerAndZoom.zoom-1), {
    checkZoomRange: true
    });

    myMap.controls.remove('trafficControl'); 
    myMap.controls.remove('searchControl');

    $(window).resize(function() {
        if($(window).width()<768){
            myMap.behaviors.disable('scrollZoom'); 
        }else{
            myMap.behaviors.enable('scrollZoom');
        } 
    });
}