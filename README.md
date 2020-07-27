# Попытка попроктиковаться, сделав тестовое задание Aviasales ([Frontend](https://github.com/KosyanMedia/test-tasks/tree/master/aviasales_frontend))

---

## Структура прокта
1. Папка **services** - внутри котороый находится файл *aviasales-service*, 
который отвечает за работу и обращение к серверу для полчения билетов
2. Папка **components** - для хранения компонентов. Папки, 
которые начиаются с меленькой буквы - это функционильные компоменты,
другие же, которые с большой - это классовые компоненты, 
которые используются там, где нужно хранить состояние
3. Папка **images** - где находятся картинки, что используются в проекте.

--- 

### Подробнее о папках и файлах

#### Services 

aviasales-service, - в файле происходит обращение к серверу, и обработка ответа, 
дабы впоследствии, поступившие данные поступившие в App легко обрабатывались. Там же пришедший объект обрабатывается, создавая новые поля и изменяя данные. Каждый объект содержит одинаковые поля. В объекте there, то есть, там, откуда, вылет отсюда, содержатся поля
   - there_origin, - отсюда происходит вылет
   - there_destination, - there_destination
   - there_departure, - время вылета
   - there_travel, - время прилёта на место
   - there_arrival, - суммарное колличество чесов, которое потребуется на полёт
   - there_stops, - массив с пересадками
   - there_duration, - общее время пелелёта в минутах
   
С моей точки зрения такой уклад не очень хорош. Следует переделать. 


#### Сomponents 
- amount-transfers - в своём роде, можно сказать, отвечает за фильтрацию билетов.

