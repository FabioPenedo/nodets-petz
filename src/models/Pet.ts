type PetType = 'dog' | 'cat' | 'fish' | 'bird';

type Pet = {
    type: PetType,
    image: string,
    name: string,
    life_expectancy?: string,
    height_average?: string,
    average_weight?: string
}

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pug.jpg',
        name: 'Pug',
        life_expectancy: '13 Anos',
        height_average: '30 cm',
        average_weight: '10 Kg'
    },

    {
        type: 'dog',
        image: 'lhasa-apso.jpg',
        name: 'Ihasa Apso',
        life_expectancy: '15 Anos',
        height_average: '25 cm',
        average_weight: '7 Kg'
    },

    {
        type: 'dog',
        image: 'maltes.jpg',
        name: 'Maltes',
        life_expectancy: '15 Anos',
        height_average: '25 cm',
        average_weight: '4 Kg'
    },

    {
        type: 'dog',
        image: 'bulldog-frances.jpg',
        name: 'Bulldog francês',
        life_expectancy: '12 Anos',
        height_average: '35 cm',
        average_weight: '14 Kg'
    },

    {
        type: 'dog',
        image: 'pitbull.jpg',
        name: 'Pitbull',
        life_expectancy: '14 Anos',
        height_average: '48 cm',
        average_weight: '28 Kg'
    },

    {
        type: 'dog',
        image: 'border-collie.jpg',
        name: 'Border Collie',
        life_expectancy: '15 Anos',
        height_average: '55 cm',
        average_weight: '20 Kg'
    },

    {
        type: 'dog',
        image: 'beagle.jpg',
        name: 'Beagle',
        life_expectancy: '16 Anos',
        height_average: '39 cm',
        average_weight: '35 Kg'
    },

    {
        type: 'dog',
        image: 'shar-pei.jpg',
        name: 'Shar Pei',
        life_expectancy: '10 Anos',
        height_average: '50 cm',
        average_weight: '30 Kg'
    },

    {
        type: 'dog',
        image: 'bulldog-ingles.jpg',
        name: 'Bulldog Ingles',
        life_expectancy: '12 Anos',
        height_average: '35 cm',
        average_weight: '23 Kg'
    },

    {
        type: 'dog',
        image: 'rottweiler.jpg',
        name: 'Rottweiler',
        life_expectancy: '10 Anos',
        height_average: '68 cm',
        average_weight: '50 Kg'
    },

    {
        type: 'dog',
        image: 'husky-siberiano.jpg',
        name: 'Husky Siberiano',
        life_expectancy: '15 Anos',
        height_average: '60 cm',
        average_weight: '28 Kg'
    },

    {
        type: 'dog',
        image: 'golden-retriever.jpg',
        name: 'Golden Retriever',
        life_expectancy: '12 Anos',
        height_average: '61 cm',
        average_weight: '32 Kg'
    },

    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor Alemão',
        life_expectancy: '14 Anos',
        height_average: '65 cm',
        average_weight: '40 Kg'
    },

    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador',
        life_expectancy: '13 Anos',
        height_average: '57 cm',
        average_weight: '30 Kg'
    },

    {
        type: 'dog',
        image: 'doberman.jpg', 
        name: 'Doberman',
        life_expectancy: '13 Anos',
        height_average: '72 cm',
        average_weight: '45 Kg'
    },

    {
        type: 'dog',
        image: 'dogue-alemao.jpg',
        name: 'Dogue Alemão',
        life_expectancy: '10 Anos',
        height_average: '50 cm',
        average_weight: '30 Kg'
    },

    {
        type: 'dog',
        image: 'pastor-australiano.jpg',
        name: 'Pastor Australiano',
        life_expectancy: '16 Anos',
        height_average: '50 cm',
        average_weight: '23 Kg'
    },

    {
        type: 'dog',
        image: 'braco-hungaro.jpg',
        name: 'Braco Hungaro',
        life_expectancy: '14 Anos',
        height_average: '59 cm',
        average_weight: '29 Kg'
    },

    {
        type: 'dog',
        image: 'pastor-suico.jpg',
        name: 'Pastor Suiço',
        life_expectancy: '11 Anos',
        height_average: '59 cm',
        average_weight: '32 Kg'
    },


    {
        type: 'dog',
        image: 'dalmata.jpg',
        name: 'Dalmata',
        life_expectancy: '13 Anos',
        height_average: '61 cm',
        average_weight: '32 Kg'
    },


    {
        type: 'cat',
        image: 'ragdoll.jpg',
        name: 'Ragdoll',
        life_expectancy: '10 a 15 Anos',
        average_weight: '3 a 7 Kg'
    },

    {
        type: 'cat',
        image: 'angora.jpg',
        name: 'Angorá',
        life_expectancy: '12 a 18 Anos',
        average_weight: '3 a 7,2 Kg'
    },

    {
        type: 'cat',
        image: 'american-shorthair.jpg',
        name: 'American Shorthair',
        life_expectancy: '15 a 20 Anos',
        average_weight: '3,5 a 5,5 Kg'
    },

    {
        type: 'cat',
        image: 'abissinio.jpg',
        name: 'Abissinio',
        life_expectancy: '9 a 15 Anos',
        average_weight: '3 a 5 Kg'
    },

    {
        type: 'cat',
        image: 'british-shorthair.jpg',
        name: 'British Shorthair',
        life_expectancy: '7 a 12 Anos',
        average_weight: '5 Kg'
    },

    {
        type: 'cat',
        image: 'exotico.jpg',
        name: 'Exótico',
        life_expectancy: '8 a 15 Anos',
        average_weight: '3 a 7 Kg'
    },

    {
        type: 'cat',
        image: 'himalaio.jpg',
        name: 'Himalaio',
        life_expectancy: '9 a 15 Anos',
        average_weight: '4 a 6 Kg'
    },

    {
        type: 'cat',
        image: 'azul-russo.jpg',
        name: 'Azul Russo',
        life_expectancy: '10 a 20 Anos',
        average_weight: '3,5 a 5,5 Kg'
    },

    {
        type: 'fish',
        image: 'mato-grosso.jpg',
        name: 'Mato Grosso',
    },

    {
        type: 'fish',
        image: 'peixe-palhaco.jpg',
        name: 'Peixe Palhaço',
    },

    {
        type: 'fish',
        image: 'acara-bandeira.jpg',
        name: 'Acara Bandeira',
    },

    {
        type: 'fish',
        image: 'cavalo-marinho.jpg',
        name: 'Cavalo Marinho',
    },

    {
        type: 'bird',
        image: 'calopsita.jpg',
        name: 'Calopsita',
    },

    {
        type: 'bird',
        image: 'canario.jpg',
        name: 'Canario',
    },

    {
        type: 'bird',
        image: 'periquito.jpg',
        name: 'Periquito',
    },

    {
        type: 'bird',
        image: 'papagaio.jpg',
        name: 'Papagaio',
    },
];

export const Pet = {
    getAll: (): Pet[] => {
        return data
    },
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type);
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(item => 
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        )
    } 
};