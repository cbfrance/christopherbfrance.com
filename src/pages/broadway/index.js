import React from 'react'
import ReactCursorPosition from 'react-cursor-position'
import styled, { injectGlobal } from 'styled-components';
import DrawingTools from './DrawingTools'
import Tooltip from './Tooltip'
import { colors, Title, Container } from './styles'
import { topLeftCoordinates, bottomRightCoordinates } from './helpers'
import { transparentize } from 'polished'

injectGlobal`
  * {
    outline: none;
    box-sizing: border-box;
  }
`;

// The grid items
// The area prop is read to create debugging crosshairs
const Item = styled.div`
  grid-area: ${props => (props.area ? props.area : null)};
  position: relative;

  /* Colors */
  ${props => (props.color == "yellow" ? `background-color: ${colors.yellow};` : '')}
  ${props => (props.color == "blue" ? `background-color: ${colors.blue};` : '')}
  ${props => (props.color == "red" ? `background-color: ${colors.red};` : '')}
  ${props => (props.color == "lightgrey" ? `background-color: ${colors.lightgrey};` : '')}

  /* Tweaks: Not all the art is grid aligned */
  ${props => (props.nudgeRight ? 'margin-right: -2px;' : '')};
  ${props => (props.nudgeLeft ? 'margin-left: -2px;' : '')};
  ${props => (props.nudgeUp ? 'margin-top: -2px;' : '')};
  ${props => (props.nudgeDown ? 'margin-bottom: -2px;' : '')};

  &::before {
    content: '${props =>
      props.area ? topLeftCoordinates(props.area) : 'null'}';
    border-top: ${props => (props.nudgeUp ? '2px' : '1px')} solid aqua;
    border-left: ${props => (props.nudgeLeft ? '2px' : '1px')} solid aqua;
  }

  &::after {
    content: '${props =>
      props.area ? bottomRightCoordinates(props.area) : 'null'}';
    border-bottom: ${props => (props.nudgeDown ? '2px' : '1px')} solid aqua;
    border-right: ${props => (props.nudgeRight ? '2px' : '1px')} solid aqua;
    bottom: 0;
    right: 0;
  }
`

const MondrianBroadway = () => (
    <div>
        <Title>Broadway Boogie Woogie (1942-43) by Piet Mondrian</Title>
        <Container>
            <ReactCursorPosition>
                <Tooltip />
                <DrawingTools>
                    <Item area="1/7/80/12" color="yellow" />
                    <Item area="1/15/-1/20" color="yellow" />
                    <Item area="1/29/-1/34" color="yellow" />
                    <Item area="1/55/-1/60" color="yellow" />
                    <Item area="1/130/-1/136" color="yellow" />
                    <Item area="1/140/-1/145" color="yellow" />
                    <Item area="1/203/-1/208" color="yellow" />
                    <Item area="1/212/-1/217" color="yellow" />
                    <Item area="1/222/-1/227" color="yellow" />
                    <Item area="1/232/-1/237" color="yellow" />
                    <Item area="6/1/11/-1" color="yellow" />
                    <Item area="38/1/44/-1" color="yellow" />
                    <Item area="85/1/90/-1" color="yellow" nudgeUp nudgeDown />
                    <Item area="105/1/110/-1" color="yellow" />
                    <Item area="135/1/141/-1" color="yellow" />
                    <Item area="151/1/157/-1" color="yellow" />
                    <Item area="166/1/171/-1" color="yellow" />
                    <Item area="175/15/180/-1" color="yellow" />
                    <Item area="187/1/192/-1" color="yellow" />
                    <Item area="206/1/211/-1" color="yellow" />
                    <Item area="213/1/218/-1" color="yellow" />
                    <Item area="228/1/233/-1" color="yellow" />
                    <Item area="15/34/23/55" color="yellow" />
                    <Item area="65/34/81/55" color="yellow" />
                    <Item area="90/39/105/51" color="yellow" />
                    <Item area="192/34/206/55" color="yellow" />
                    <Item area="110/70/135/86" color="yellow" />
                    <Item area="85/98/114/115" color="yellow" />
                    <Item area="128/98/141/115" color="yellow" />
                    <Item area="18/68/27/77" color="yellow" />
                    
                    <Item area="6/7/11/12" color="blue" />
                    <Item area="24/7/28/12" color="blue" nudgeUp />
                    <Item area="165/6/171/12" color="blue" nudgeRight />
                    <Item area="52/7/57/12" color="blue" />
                    <Item
                        area="85/15/90/20"
                        blue
                        nudgeUp
                        nudgeDown
                        nudgeRight
                    />
                    <Item area="105/15/110/20" color="blue" nudgeUp />
                    <Item area="135/15/141/20" color="blue" nudgeRight nudgeDown />
                    <Item area="187/7/192/13" color="blue" nudgeRight nudgeDown />
                    <Item area="206/16/211/20" color="blue" nudgeLeft nudgeRight />
                    <Item area="6/37/11/42" color="blue" />
                    <Item area="23/29/28/34" color="blue" />
                    <Item area="38/29/44/34" color="blue" nudgeLeft />
                    <Item area="48/21/61/34" color="blue" nudgeLeft />
                    <Item area="80/29/85/34" color="blue" nudgeLeft />
                    <Item area="90/29/95/34" color="blue" nudgeLeft />
                    <Item area="123/29/129/34" color="blue" nudgeLeft />
                    <Item area="135/29/141/34" color="blue" nudgeLeft nudgeUp />
                    <Item
                        area="151/29/156/34"
                        blue
                        nudgeLeft
                        nudgeUp
                        nudgeDown
                    />
                    <Item area="162/21/175/34" color="blue" nudgeLeft nudgeUp />
                    <Item area="187/29/192/34" color="blue" nudgeLeft nudgeUp />
                    <Item area="206/29/211/34" color="blue" />
                    <Item area="214/29/218/34" color="blue" />
                    <Item area="228/29/233/34" color="blue" />
                    <Item area="23/55/28/60" color="blue" />
                    <Item area="34/55/38/60" color="blue" />
                    <Item area="52/55/57/60" color="blue" />
                    <Item area="85/55/90/60" color="blue" />
                    <Item area="105/55/110/60" color="blue" nudgeUp nudgeLeft />
                    <Item area="135/55/141/60" color="blue" nudgeLeft />
                    <Item area="175/55/180/60" color="blue" nudgeLeft />
                    <Item area="206/55/211/60" color="blue" nudgeLeft />
                    <Item area="228/55/233/60" color="blue" nudgeLeft />
                    <Item area="38/72/44/78" color="blue" nudgeLeft />
                    <Item area="84/81/90/86" color="blue" nudgeLeft />
                    {/* color="Red" Items, first columnish */}
                    <Item area="1/15/6/20" color="red" nudgeRight />
                    <Item area="38/7/44/12" color="red" />
                    <Item area="65/7/70/12" color="red" />
                    <Item area="85/7/90/12" color="red" nudgeUp nudgeDown />
                    <Item area="105/6/110/10" color="red" nudgeLeft nudgeUp />
                    <Item area="213/8/218/14" color="red" nudgeDown />
                    {/* color="Red" Items, second columnish */}
                    <Item area="23/15/28/20" color="red" />
                    <Item area="121/15/126/20" color="red" nudgeRight nudgeDown />
                    <Item area="151/15/157/20" color="red" nudgeRight nudgeUp />
                    <Item area="165/15/170/20" color="red" nudgeRight />
                    <Item area="175/15/180/20" color="red" nudgeRight nudgeDown />
                    <Item
                        area="188/16/193/20"
                        red
                        nudgeLeft
                        nudgeRight
                        nudgeDown
                    />
                    <Item area="228/15/233/20" color="red" nudgeRight />
                    <Item area="65/29/70/34" color="red" nudgeLeft />
                    <Item area="85/34/90/39" color="red" nudgeLeft nudgeUp nudgeDown />
                    <Item area="105/29/110/34" color="red" nudgeLeft />
                    <Item area="119/34/135/54" color="red" nudgeRight nudgeDown />{' '}
                    <Item area="175/29/180/34" color="red" nudgeLeft nudgeDown />
                    <Item area="195/29/199/34" color="red" nudgeLeft />
                    <Item area="1/55/6/60" color="red" nudgeDown />
                    <Item area="38/49/44/55" color="red" nudgeDown />
                    <Item area="65/55/70/60" color="red" />
                    <Item area="151/55/156/60" color="red" nudgeLeft nudgeDown />
                    <Item area="188/55/193/60" color="red" nudgeLeft />
                    <Item area="206/43/211/49" color="red" />
                    <Item area="214/55/219/60" color="red" nudgeLeft />
                    <Item area="228/44/233/49" color="red" />
                    <Item area="11/38/23/49" color="red" />
                    <Item area="28/38/38/49" color="red" />
                    <Item area="11/63/32/81" color="red" />
                    <Item area="11/63/32/81" color="red" />
                    <Item area="105/70/110/76" color="red" />
                    <Item area="104/94/109/98" color="red" />
                    <Item area="135/81/141/87" color="red" />
                    <Item area="135/98/141/104" color="red" />
                    <Item area="151/100/156/106" color="red" />
                    <Item area="174/103/180/109" color="red" />
                    <Item area="206/104/211/108" color="red" nudgeRight />
                    <Item area="84/92/90/99" color="red" />
                    <Item area="227/94/232/99" color="blue" />
                    <Item area="227/105/232/109" color="blue" />
                    <Item area="206/94/211/99" color="blue" />
                    <Item area="175/90/180/96" color="blue" />
                    <Item area="151/84/156/90" color="blue" />
                    <Item area="115/70/135/86" color="blue" />
                    <Item area="11/7/15/12" color="lightgrey" />
                    <Item area="80/7/85/12" color="lightgrey" />
                    <Item area="135/10/141/15" color="lightgrey" />
                    <Item area="151/11/157/15" color="lightgrey" />
                    <Item area="206/7/211/13" color="lightgrey" />
                    <Item area="233/10/228/15" color="lightgrey" />
                    <Item area="23/38/28/49" color="lightgrey" />
                    <Item area="32/63/38/81" color="lightgrey" />
                    <Item area="17/67/26/76" color="yellow" />
                    <Item area="115/70/135/86" color="lightgrey" />
                    <Item area="121/73/129/83" color="yellow" />
                    <Item area="206/7/211/13" color="lightgrey" />
                    <Item area="228/10/233/15" color="lightgrey" />
                    <Item area="206/112/211/117" color="blue" />
                    <Item area="114/98/128/115" color="lightgrey" />


                    <Item area="130/15/135/20" color="lightgrey"/>
                    <Item area="161/15/165/20" color="lightgrey"/>
                    <Item area="170/15/175/20" color="lightgrey"/>
                    <Item area="193/15/198/20" color="lightgrey"/>
                    <Item area="11/15/15/20" color="lightgrey"/>
                    <Item area="34/15/38/20" color="lightgrey"/>
                    <Item area="44/15/48/20" color="lightgrey"/>
                    <Item area="60/15/65/20" color="lightgrey"/>
                    <Item area="130/15/135/20" color="lightgrey"/>
                    <Item area="161/15/165/21" color="lightgrey"/>
                    <Item area="170/15/175/21" color="lightgrey"/>
                    <Item area="193/15/198/21" color="lightgrey"/>
                    <Item area="14/29/23/34" color="lightgrey"/>
                    <Item area="70/29/80/34" color="lightgrey"/>
                    <Item area="84/29/90/34" color="lightgrey"/>
                    <Item area="38/38/44/49" color="lightgrey"/>
                    <Item area="69/40/76/48" color="lightgrey"/>
                    <Item area="94/41/101/48" color="lightgrey"/>
                    <Item area="151/42/156/48" color="lightgrey"/>
                    <Item area="175/43/180/50" color="lightgrey"/>
                    <Item area="191/42/198/49" color="lightgrey"/>
                    <Item area="211/54/211/54" color="lightgrey"/>
                    <Item area="11/55/15/60" color="lightgrey"/>
                    <Item area="44/55/48/60" color="lightgrey"/>
                    <Item area="73/55/77/60" color="lightgrey"/>
                    <Item area="84/50/90/55" color="lightgrey"/>
                    <Item area="90/55/95/60" color="lightgrey"/>
                    <Item area="109/55/114/60" color="lightgrey"/>
                    <Item area="119/54/124/60" color="lightgrey"/>
                    <Item area="131/55/136/60" color="lightgrey"/>
                    <Item area="162/55/167/60" color="lightgrey"/>
                    <Item area="192/55/197/60" color="lightgrey"/>
                    <Item area="201/55/206/60" color="lightgrey"/>
                    <Item area="206/49/211/54" color="lightgrey"/>
                    <Item area="211/55/214/60" color="lightgrey"/>
                    <Item area="38/60/44/65" color="lightgrey"/>
                    <Item area="32/63/38/81" color="lightgrey"/>
                    <Item area="6/77/11/84" color="lightgrey"/>
                    <Item area="38/85/44/92" color="lightgrey"/>
                    <Item area="6/125/11/131" color="lightgrey"/>
                    <Item area="11/130/17/136" color="lightgrey"/>
                    <Item area="38/123/44/130" color="lightgrey"/>
                    <Item area="60/130/65/136" color="lightgrey"/>
                    <Item area="90/130/93/136" color="lightgrey"/>
                    <Item area="84/66/90/73" color="lightgrey"/>
                    <Item area="104/76/109/86" color="lightgrey"/>
                    <Item area="104/98/109/115" color="lightgrey"/>
                    <Item area="104/130/109/136" color="lightgrey"/>
                    <Item area="114/98/127/115" color="lightgrey"/>
                    <Item area="135/66/141/73" color="lightgrey"/>
                    <Item area="151/68/156/74" color="lightgrey"/>
                    <Item area="175/70/180/76" color="lightgrey"/>
                    <Item area="150/130/156/136" color="lightgrey"/>
                    <Item area="160/130/166/136" color="lightgrey"/>
                    <Item area="174/130/180/136" color="lightgrey"/>

                    <Item area="84/15/91/20" color="blue"/>
                    <Item area="151/29/156/34" color="blue"/>
                    <Item area="115/70/135/86" color="blue"/>
                    <Item area="84/115/90/121" color="blue"/>
                    <Item area="104/115/109/120" color="blue"/>
                    <Item area="151/116/156/121" color="blue"/>
                    <Item area="174/117/180/123" color="blue"/>
                    <Item area="206/130/211/136" color="blue"/>
                    <Item area="187/130/192/136" color="blue"/>
                    <Item area="93/130/98/136" color="blue"/>
                    <Item area="74/130/79/136" color="blue"/>
                    <Item area="38/130/44/136" color="blue"/>
                    <Item area="206/150/211/156" color="blue"/>
                    <Item area="44/158/84/180" color="blue"/>
                    <Item area="135/168/141/174" color="blue"/>
                    <Item area="104/185/109/191" color="blue"/>
                    <Item area="135/186/141/192" color="blue"/>
                    <Item area="150/171/155/177" color="blue"/>
                    <Item area="150/185/156/190" color="blue"/>
                    <Item area="205/150/210/156" color="blue"/>
                    <Item area="205/173/210/179" color="blue"/>
                    <Item area="38/203/45/208" color="blue"/>
                    <Item area="38/232/45/237" color="blue"/>
                    <Item area="54/232/59/237" color="blue"/>
                    <Item area="72/203/78/208" color="blue"/>
                    <Item area="72/212/77/217" color="blue"/>
                    <Item area="84/203/90/208" color="blue"/>
                    <Item area="84/227/90/231" color="blue"/>
                    <Item area="119/203/124/208" color="blue"/>
                    <Item area="119/232/124/236" color="blue"/>
                    <Item area="135/222/140/227" color="blue"/>
                    <Item area="150/203/155/208" color="blue"/>
                    <Item area="161/208/174/222" color="blue"/>
                    <Item area="178/202/182/208" color="blue"/>
                    <Item area="177/222/182/227" color="blue"/>
                    <Item area="177/231/182/236" color="blue"/>
                    <Item area="192/202/198/208" color="blue"/>
                    <Item area="205/216/210/222" color="blue"/>

                    <Item area="1/130/6/136" color="red"/>
                    <Item area="27/130/32/136" color="red"/>
                    <Item area="52/130/60/136" color="red"/>
                    <Item area="84/130/90/136" color="red"/>
                    <Item area="118/130/123/136" color="red"/>
                    <Item area="135/114/141/119" color="red"/>
                    <Item area="146/130/151/136" color="red"/>
                    <Item area="156/130/160/136" color="red"/>
                    <Item area="206/121/211/126" color="red"/>
                    <Item area="201/130/206/136" color="red"/>
                    <Item area="186/140/192/145" color="red"/>
                    <Item area="205/140/211/145" color="red"/>
                    <Item area="205/162/210/168" color="red"/>
                    <Item area="135/157/140/163" color="red"/>
                    <Item area="145/157/151/163" color="red"/>
                    <Item area="104/152/109/157" color="red"/>
                    <Item area="84/156/90/163" color="red"/>
                    <Item area="57/158/76/180" color="red"/>
                    <Item area="84/179/90/186" color="red"/>
                    <Item area="109/168/144/189" color="red"/>

                    <Item area="227/109/239/124" color="red"/>
                    <Item area="227/149/232/154" color="red"/>
                    <Item area="223/130/227/136" color="red"/>
                    <Item area="205/202/210/208" color="red"/>
                    <Item area="227/215/232/221" color="red"/>
                    <Item area="226/231/232/236" color="red"/>
                    <Item area="205/231/210/236" color="red"/>
                    <Item area="205/202/211/208" color="red"/>
                    <Item area="182/208/193/222" color="red"/>
                    <Item area="192/231/198/236" color="red"/>
                    <Item area="169/231/174/236" color="red"/>
                    <Item area="168/202/174/208" color="red"/>
                    <Item area="150/222/156/227" color="red"/>
                    <Item area="150/236/155/240" color="red"/>
                    <Item area="135/202/141/208" color="red"/>
                    <Item area="135/231/141/237" color="red"/>
                    <Item area="116/217/129/223" color="red"/>
                    <Item area="104/202/110/208" color="red"/>
                    <Item area="104/222/110/227" color="red"/>
                    <Item area="104/231/109/237" color="red"/>
                    <Item area="84/212/90/217" color="red"/>
                    <Item area="72/231/78/237" color="red"/>
                    <Item area="50/212/64/228" color="red"/>
                    <Item area="54/203/60/208" color="red"/>
                    <Item area="38/217/45/222" color="red"/>
                    <Item area="24/212/30/217" color="red"/>
                    <Item area="1/212/6/218" color="red"/>
                    <Item area="1/231/6/237" color="red"/>
                    <Item area="11/231/17/237" color="red"/>
                    <Item area="24/231/30/237" color="red"/>

                    <Item area="84/140/90/145" color="blue"/>
                    <Item area="22/130/26/135" color="blue"/>
                    <Item area="118/140/123/145" color="blue"/>
                    <Item area="155/140/160/145" color="blue"/>
                    <Item area="223/140/227/145" color="blue"/>
                    <Item area="227/159/232/164" color="blue"/>
                    <Item area="227/171/231/176" color="blue"/>
                    <Item area="227/202/231/207" color="blue"/>
                    <Item area="25/217/34/231" color="blue"/>
                    <Item area="27/203/32/208" color="blue"/>
                    <Item area="6/203/11/207" color="blue"/>
                    <Item area="11/212/15/217" color="blue"/>
                    <Item area="6/222/11/227" color="blue"/>

                    <Item area="116/202/129/236" color="yellow"/>
                    <Item area="104/157/156/163" color="yellow"/>

                    <Item area="116/202/129/236" color="yellow"/>
                    <Item area="104/157/156/163" color="yellow"/>
                    <Item area="27/157/27/157" color="yellow"/>
                    <Item area="131/140/135/145" color="red"/>
                    <Item area="135/157/141/163" color="red"/>
                    <Item area="145/157/151/163" color="red"/>
                    <Item area="174/136/180/140" color="red"/>
                    <Item area="116/217/129/223" color="red"/>
                    <Item area="14/140/19/145" color="red"/>
                    <Item area="38/140/44/145" color="red"/>
                    <Item area="54/140/58/145" color="red"/>
                    <Item area="121/73/129/83" color="yellow"/>
                    <Item area="116/202/129/237" color="yellow"/>
                    <Item area="6/136/11/140" color="lightgrey"/>
                    <Item area="10/140/15/145" color="lightgrey"/>
                    <Item area="6/145/11/150" color="lightgrey"/>
                    <Item area="6/174/11/184" color="lightgrey"/>
                    <Item area="6/198/11/203" color="lightgrey"/>
                    <Item area="11/203/16/208" color="lightgrey"/>
                    <Item area="6/212/11/218" color="lightgrey"/>
                    <Item area="6/227/11/231" color="lightgrey"/>
                    <Item area="6/236/11/240" color="lightgrey"/>
                    <Item area="17/231/21/237" color="lightgrey"/>
                    <Item area="11/222/16/227" color="lightgrey"/>
                    <Item area="15/212/21/218" color="lightgrey"/>
                    <Item area="21/222/25/228" color="lightgrey"/>
                    <Item area="22/140/28/145" color="lightgrey"/>
                    <Item area="33/140/38/144" color="lightgrey"/>
                    <Item area="38/145/44/152" color="lightgrey"/>
                    <Item area="38/177/44/185" color="lightgrey"/>
                    <Item area="38/198/45/203" color="lightgrey"/>
                    <Item area="38/208/45/212" color="lightgrey"/>
                    <Item area="38/227/45/231" color="lightgrey"/>
                    <Item area="45/231/50/237" color="lightgrey"/>
                    <Item area="45/222/50/228" color="lightgrey"/>
                    <Item area="45/212/50/217" color="lightgrey"/>
                    <Item area="44/140/49/145" color="lightgrey"/>
                    <Item area="60/140/66/145" color="lightgrey"/>
                    <Item area="73/140/78/145" color="lightgrey"/>
                    <Item area="68/203/72/208" color="lightgrey"/>
                    <Item area="64/212/68/217" color="lightgrey"/>
                    <Item area="64/222/68/227" color="lightgrey"/>
                    <Item area="59/232/65/237" color="lightgrey"/>
                    <Item area="73/222/78/227" color="lightgrey"/>
                    <Item area="84/222/90/227" color="lightgrey"/>
                    <Item area="84/231/90/236" color="lightgrey"/>
                    <Item area="90/212/104/216" color="lightgrey"/>
                    <Item area="100/202/104/208" color="lightgrey"/>
                    <Item area="94/222/99/227" color="lightgrey"/>
                    <Item area="100/231/103/237" color="lightgrey"/>
                    <Item area="105/217/110/222" color="lightgrey"/>
                    <Item area="110/212/116/217" color="lightgrey"/>
                    <Item area="110/222/116/227" color="lightgrey"/>
                    <Item area="124/231/129/236" color="lightgrey"/>
                    <Item area="129/222/135/227" color="lightgrey"/>
                    <Item area="129/212/135/217" color="lightgrey"/>
                    <Item area="146/202/150/208" color="lightgrey"/>
                    <Item area="144/168/150/189" color="lightgrey"/>
                    <Item area="141/212/150/217" color="lightgrey"/>
                    <Item area="140/222/150/227" color="lightgrey"/>
                    <Item area="146/231/150/236" color="lightgrey"/>
                    <Item area="150/227/155/231" color="lightgrey"/>
                    <Item area="155/231/160/237" color="lightgrey"/>
                    <Item area="156/222/161/227" color="lightgrey"/>
                    <Item area="156/202/161/208" color="lightgrey"/>
                    <Item area="165/140/170/145" color="lightgrey"/>
                    <Item area="160/130/166/136" color="lightgrey"/>
                    <Item area="174/140/180/145" color="lightgrey"/>
                    <Item area="211/130/215/135" color="lightgrey"/>
                    <Item area="211/140/215/145" color="lightgrey"/>
                    <Item area="227/130/232/135" color="lightgrey"/>
                    <Item area="227/140/232/145" color="lightgrey"/>
                    <Item area="227/184/231/189" color="lightgrey"/>
                    <Item area="231/202/236/207" color="lightgrey"/>
                    <Item area="214/202/218/208" color="lightgrey"/>

                    <Item area="117/173/128/185" color="lightgrey"/>
                    <Item area="135/175/141/186" color="lightgrey"/>
                    <Item area="124/232/129/236" color="lightgrey"/>
                    <Item area="239/108/240/124" color="lightgrey"/>
                    <Item area="119/202/124/207" color="blue"/>
                    <Item area="119/231/123/236" color="blue"/>
                    <Item area="135/186/140/192" color="blue"/>
                    <Item area="135/168/140/174" color="blue"/>
                    <Item area="135/174/141/186" color="lightgrey"/>
                    <Item area="117/173/128/185" color="lightgrey"/>
                    <Item area="63/164/72/176" color="yellow"/>
                </DrawingTools>
            </ReactCursorPosition>
        </Container>
    </div>
)

export default MondrianBroadway
