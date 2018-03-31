import React from 'react'
import ReactCursorPosition from 'react-cursor-position'
import Tooltip from './Tooltip'
import DrawingTools from './DrawingTools'
import GridVisual from './GridVisual'
import ReferenceArt from './ReferenceArt'
import { Title, Container, Item } from './styles'

const MondrianBroadway = () => (
    <div>
        <Title>Broadway Boogie Woogie (1942-43) by Piet Mondrian</Title>
        <Container>
            <ReferenceArt />
            <GridVisual />
            <ReactCursorPosition>
                <Tooltip />
                <DrawingTools>
                    {/* Yellow columns */}
                    <Item area="1/7/80/12" yellow />
                    <Item area="1/15/-1/20" yellow />
                    <Item area="1/29/-1/34" yellow />
                    <Item area="1/55/-1/60" yellow />
                    <Item area="1/130/-1/136" yellow />
                    <Item area="1/140/-1/145" yellow />
                    <Item area="1/203/-1/208" yellow />
                    <Item area="1/212/-1/217" yellow />
                    <Item area="1/222/-1/227" yellow />
                    <Item area="1/232/-1/237" yellow />
                    {/* Yellow rows */}
                    <Item area="6/1/11/-1" yellow />
                    <Item area="38/1/44/-1" yellow />
                    <Item area="85/1/90/-1" yellow nudgeUp nudgeDown />
                    <Item area="105/1/110/-1" yellow />
                    <Item area="135/1/141/-1" yellow />
                    <Item area="151/1/157/-1" yellow />
                    <Item area="166/1/171/-1" yellow />
                    <Item area="175/15/180/-1" yellow />
                    <Item area="187/1/192/-1" yellow />
                    <Item area="206/1/211/-1" yellow />
                    <Item area="213/1/218/-1" yellow />
                    <Item area="228/1/233/-1" yellow />
                    {/* Yellow Items */}
                    <Item area="15/34/23/55" yellow />
                    <Item area="65/34/81/55" yellow />
                    <Item area="90/39/105/51" yellow />
                    <Item area="192/34/206/55" yellow />
                    <Item area="110/70/135/86" yellow />
                    <Item area="85/98/114/115" yellow />
                    <Item area="128/98/141/115" yellow />
                    <Item area="18/68/27/77" yellow />
                    {/* Blue Items, first columnish */}
                    <Item area="6/7/11/12" blue />
                    <Item area="24/7/28/12" blue nudgeUp />
                    <Item area="165/6/171/12" blue nudgeRight />
                    <Item area="52/7/57/12" blue />
                    <Item
                        area="85/15/90/20"
                        blue
                        nudgeUp
                        nudgeDown
                        nudgeRight
                    />
                    <Item area="105/15/110/20" blue nudgeUp />
                    <Item area="135/15/141/20" blue nudgeRight nudgeDown />
                    <Item area="187/7/192/13" blue nudgeRight nudgeDown />
                    {/* Blue Items, second columnish */}
                    <Item area="206/16/211/20" blue nudgeLeft nudgeRight />
                    {/* Blue Items, third columnish */}
                    <Item area="6/37/11/42" blue />
                    <Item area="23/29/28/34" blue />
                    <Item area="38/29/44/34" blue nudgeLeft />
                    <Item area="48/21/61/34" blue nudgeLeft />
                    <Item area="80/29/85/34" blue nudgeLeft />
                    <Item area="90/29/95/34" blue nudgeLeft />
                    <Item area="123/29/129/34" blue nudgeLeft />
                    <Item area="135/29/141/34" blue nudgeLeft nudgeUp />
                    <Item
                        area="151/29/156/34"
                        blue
                        nudgeLeft
                        nudgeUp
                        nudgeDown
                    />
                    <Item area="162/21/175/34" blue nudgeLeft nudgeUp />{' '}
                    {/* Big */}
                    <Item area="187/29/192/34" blue nudgeLeft nudgeUp />
                    <Item area="206/29/211/34" blue />
                    <Item area="214/29/218/34" blue />
                    <Item area="228/29/233/34" blue />{' '}
                    {/* Contains signature */}
                    {/* Blue Items, fourth columnish */}
                    <Item area="23/55/28/60" blue />
                    <Item area="34/55/38/60" blue />
                    <Item area="52/55/57/60" blue />
                    <Item area="85/55/90/60" blue />
                    <Item area="105/55/110/60" blue nudgeUp nudgeLeft />
                    <Item area="135/55/141/60" blue nudgeLeft />
                    <Item area="175/55/180/60" blue nudgeLeft />
                    <Item area="206/55/211/60" blue nudgeLeft />
                    <Item area="228/55/233/60" blue nudgeLeft />
                    <Item area="38/72/44/78" blue nudgeLeft />
                    <Item area="84/81/90/86" blue nudgeLeft />
                    {/* Red Items, first columnish */}
                    <Item area="1/15/6/20" red nudgeRight />
                    <Item area="38/7/44/12" red />
                    <Item area="65/7/70/12" red />
                    <Item area="85/7/90/12" red nudgeUp nudgeDown />
                    <Item area="105/6/110/10" red nudgeLeft nudgeUp />
                    <Item area="213/8/218/14" red nudgeDown />
                    {/* Red Items, second columnish */}
                    <Item area="23/15/28/20" red />
                    <Item area="121/15/126/20" red nudgeRight nudgeDown />
                    <Item area="151/15/157/20" red nudgeRight nudgeUp />
                    <Item area="165/15/170/20" red nudgeRight />
                    <Item area="175/15/180/20" red nudgeRight nudgeDown />
                    <Item
                        area="188/16/193/20"
                        red
                        nudgeLeft
                        nudgeRight
                        nudgeDown
                    />
                    <Item area="228/15/233/20" red nudgeRight />
                    <Item area="65/29/70/34" red nudgeLeft />
                    <Item area="85/34/90/39" red nudgeLeft nudgeUp nudgeDown />
                    <Item area="105/29/110/34" red nudgeLeft />
                    <Item area="119/34/135/54" red nudgeRight nudgeDown />{' '}
                    {/* Big */}
                    <Item area="175/29/180/34" red nudgeLeft nudgeDown />
                    <Item area="195/29/199/34" red nudgeLeft />
                    {/* Red Items, third columnish */}
                    <Item area="1/55/6/60" red nudgeDown />
                    <Item area="38/49/44/55" red nudgeDown />
                    <Item area="65/55/70/60" red />
                    <Item area="151/55/156/60" red nudgeLeft nudgeDown />
                    <Item area="188/55/193/60" red nudgeLeft />
                    <Item area="206/43/211/49" red />
                    <Item area="214/55/219/60" red nudgeLeft />
                    <Item area="228/44/233/49" red />
                    {/* Red Items, fourth columnish */}
                    <Item area="11/38/23/49" red />
                    <Item area="28/38/38/49" red />
                    {/* Red Items, fifth columnish */}
                    <Item area="11/63/32/81" red /> {/* Big */}
                    <Item area="11/63/32/81" red />
                    <Item area="105/70/110/76" red />
                    <Item area="104/94/109/98" red />
                    <Item area="135/81/141/87" red />
                    <Item area="135/98/141/104" red />
                    <Item area="151/100/156/106" red />
                    <Item area="174/103/180/109" red />
                    <Item area="206/104/211/108" red nudgeRight />
                    <Item area="84/92/90/99" red />
                    <Item area="227/94/232/99" blue />
                    <Item area="227/105/232/109" blue />
                    <Item area="206/94/211/99" blue />
                    <Item area="175/90/180/96" blue />
                    <Item area="151/84/156/90" blue />
                    <Item area="115/70/135/86" blue />
                    {/* Grey Items */}
                    <Item area="11/7/15/12" grey />
                    <Item area="80/7/85/12" grey />
                    <Item area="135/10/141/15" grey />
                    <Item area="151/11/157/15" grey />
                    <Item area="206/7/211/13" grey />
                    <Item area="233/10/228/15" grey />
                    <Item area="23/38/28/49" grey />
                    <Item area="32/63/38/81" grey /> {/* Wide */}
                    <Item area="17/67/26/76" yellow />
                    <Item area="115/70/135/86" grey />
                    <Item area="121/73/129/83" yellow />
                    <Item area="206/7/211/13" grey />
                    <Item area="228/10/233/15" grey />
                    <Item area="206/112/211/117" blue />
                    <Item area="114/98/128/115" grey />
                </DrawingTools>
            </ReactCursorPosition>
        </Container>
    </div>
)

export default MondrianBroadway
