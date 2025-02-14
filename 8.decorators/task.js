//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(args);      
        let checkenHash = cache.find(item => item.hash === hash);
            if(checkenHash) {
                console.log('Из кеша: ' + checkenHash.volume);
                return 'Из кеша: ' + checkenHash.volume; 
        }           
            
        let result = func(...args);
        const arg = {
            hash: hash,
            volume: result
        }        
        cache.push(arg);
        if(cache.length > 5) {
            cache.shift();          
        }
        console.log('Вычисляем: ' + result);
        return 'Вычисляем: ' + result;
    }
    return wrapper;
}      

/*function cachingDecoratorNew(func) {
    let cache = [];
  
    function wrapper(...args) {
        const hash = ???; // получаем правильный хеш c помощью функции md5
        let objectInCache = cache.find((item) => ???); // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache) { // если элемент найден
            console.log("Из кеша: " + ???); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кеша: " + ???;
        }
  
        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push(???) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          ??? // если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
  }*/

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;       
    function wrapper(...args) {
        wrapper.allCount += 1;
        console.log('тук-тук ' + wrapper.allCount);
        if(timeoutId === null) {
            wrapper.count += 1;
            func(...args);
            console.log('синхронный запуск ' + wrapper.count);
        } else {
            clearTimeout(timeoutId);
            timeoutId = null;
            console.log('очищаю ID');
        }
        timeoutId = setTimeout(() => {
            wrapper.count += 1;
            func(...args);
            console.log('запускаю асинхронный таймер');
        }, delay);
    }
    return wrapper;
}
