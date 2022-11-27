import React from "react";


export function convertName(name) {
    const rus = new Map();
    rus.set('Brocolli - 1 Kg', 'Броколли, 1 Кг');
    rus.set('Cauliflower - 1 Kg', 'Цв. капуста, 1 Кг');
    rus.set('Cucumber - 1 Kg', 'Огурец, 1 Кг');
    rus.set('Beetroot - 1 Kg', 'Свекла, 1 Кг');
    rus.set('Carrot - 1 Kg', 'Морковь, 1 Кг');
    rus.set('Tomato - 1 Kg', 'Томаты, 1 Кг');
    rus.set('Beans - 1 Kg', 'Фасоль, 1 Кг');
    rus.set('Brinjal - 1 Kg', 'Баклажан, 1 Кг');
    rus.set('Capsicum', 'Бол. Перец, 1 Кг');
    rus.set('Mushroom - 1 Kg', 'Шампиньоны, 1 Кг');
    rus.set('Potato - 1 Kg', 'Картофель, 1 Кг');
    rus.set('Pumpkin - 1 Kg', 'Тыква, 1 Кг');
    rus.set('Corn - 1 Kg', 'Кукуруза, 1 Кг');
    rus.set('Onion - 1 Kg', 'Лук, 1 Кг');
    rus.set('Apple - 1 Kg', 'Яблоки, 1 Кг');
    rus.set('Banana - 1 Kg', 'Бананы, 1 Кг');
    rus.set('Grapes - 1 Kg', 'Виноград, 1 Кг');
    rus.set('Mango - 1 Kg', 'Манго, 1 Кг');
    rus.set('Musk Melon - 1 Kg', 'Дыня, 1 Кг');
    rus.set('Orange - 1 Kg', 'Апельсины, 1 Кг');
    rus.set('Pears - 1 Kg', 'Груши, 1 Кг');
    rus.set('Pomegranate - 1 Kg', 'Гранаты, 1 Кг');
    rus.set('Raspberry - 1/4 Kg', 'Малина, 250 г');
    rus.set('Strawberry - 1/4 Kg', 'Клубника, 1 Кг');
    rus.set('Water Melon - 1 Kg', 'Арбуз, 1 Кг');
    rus.set('Almonds - 1/4 Kg', 'Миндаль, 250 г');
    rus.set('Pista - 1/4 Kg', 'Фисташки, 250 г');
    rus.set('Nuts Mixture - 1 Kg', 'Ореховый микс, 1 Кг');
    rus.set('Cashews - 1 Kg', 'Кэшью, 1 Кг');
    rus.set('Walnuts - 1/4 Kg', 'Грецкий орех, 250 г');
    return rus.get(name);
};