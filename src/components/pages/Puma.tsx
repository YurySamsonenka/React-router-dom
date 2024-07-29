import React from 'react';
import adidasModel1 from '../../assets/puma/RTLADC540502_23293751_1_v1.webp';
import adidasModel2 from '../../assets/puma/RTLADC651001_21619926_1_v1.webp';
import adidasModel3 from '../../assets/puma/RTLACH590601_19369607_1_v2.webp';
import {  ShoesItem } from './Adidas';
import { Link } from 'react-router-dom';
import { S } from './_styles';

export const pumaArr: ShoesItem[] = [
    {
        id: '1',
        model: 'Suede Classic XXI Puma Black-Puma White',
        collection: 'new collection1',
        price: '379.00 р.',
        picture: adidasModel1,

    },
    {
        id: '2',
        model: ' X-Ray 2 Square SD Cool Light Gray-PUMA B',
        collection: 'new collection22',
        price: '389.00 р.',
        picture: adidasModel2,
    },
    {
        id: '3',
        model: 'Smash Platform v3 SD PUMA Black-PUMA Whi',
        collection: 'new collection333',
        price: '429.00 р.',
        picture: adidasModel3,
    },
];

export const Puma = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>PUMA</h2>
            <S.FlexContainer>
                {pumaArr.map((puma) => {
                    return (
                      <Link key={puma.id} to={`/puma/${puma.id}`}><img src={puma.picture} alt={puma.model} /></Link>
                    );
                })}
            </S.FlexContainer>
            <p>
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    );
};
