import {Button,Segment } from 'semantic-ui-react'
import { Grid, Image,Header} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Offers from './Offers2';import React,{Component} from 'react'
export class Mypage extends Component{
    render(){
     const Paragraph =() =>(    <p>
his specification does noindicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters. For this reason, authors should use appropriate elements and styles to achieve visual formatting effects that involve white space, rather than space characters.

For all HTML elements except PRE, sequences of white space separate "words" (we use the term "word" here to mean "sequences of non-white space characters"). When formatting text, user agents should identify these words and lay them out according to the conventions of the particular written language (script) and target medium.

This layout may involve putting space between words (called inter-word space), but conventions for inter-word space vary from script to script. For example, in Latin scripts, inter-word space is typically rendered as an ASCII space (&#x0020;), while in Thai it is a zero-width word separator (&#x200B;). In Japanese and Chinese, inter-word space is not typically rendered at all.

Note that a sequence of white spaces between words in the source document may result in an entirely different rendered inter-word spacing (except in the case of the PRE element). In particular, user agents should collapse input white space sequences when producing output inter-word space. This can and should be done even in the absence of language information (from the lang attribute, the HTTP "Content-Language" 
header field (see [RFC2616], section 14.12), user agent settings, etc.). </p>  
)
const ImageExampleFloated = () => (
    <Segment>
      <Image circular src='data:image/png;base64,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' /> 
      <p>
        Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
        facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
        referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
        electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
        ex natum rebum iisque.his specification does noindicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters. For this reason, authors should use appropriate elements and styles to achieve visual formatting effects that involve white space, rather than space characters.

For all HTML elements except PRE, sequences of white space separate "words" (we use the term "word" here to mean "sequences of non-white space characters"). When formatting text, user agents should identify these words and lay them out according to the conventions of the particular written language (script) and target medium.

This layout may involve putting space between words (called inter-word space), but conventions for inter-word space vary from script to script. For example, in Latin scripts, inter-word space is typically rendered as an ASCII space (&#x0020;), while in Thai it is a zero-width word separator (&#x200B;). In Japanese and Chinese, inter-word space is not typically rendered at all.

Note that a sequence of white spaces between words in the source document may result in an entirely different rendered inter-word spacing (except in the case of the PRE element). In particular, user agents should collapse input white space sequences when producing output inter-word space. This can and should be done even in the absence of language information (from the lang attribute, the HTTP "Content-Language" 
header field (see [RFC2616], section 14.12), user agent settings, etc.).
      </p>
      <Image circular src='data:image/png;base64,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' /> 
      <p>
        Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
        definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
        phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
        phaedrum, vim vivendum maiestatis in.his specification does noindicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters. For this reason, authors should use appropriate elements and styles to achieve visual formatting effects that involve white space, rather than space characters.

For all HTML elements except PRE, sequences of white space separate "words" (we use the term "word" here to mean "sequences of non-white space characters"). When formatting text, user agents should identify these words and lay them out according to the conventions of the particular written language (script) and target medium.

This layout may involve putting space between words (called inter-word space), but conventions for inter-word space vary from script to script. For example, in Latin scripts, inter-word space is typically rendered as an ASCII space (&#x0020;), while in Thai it is a zero-width word separator (&#x200B;). In Japanese and Chinese, inter-word space is not typically rendered at all.

Note that a sequence of white spaces between words in the source document may result in an entirely different rendered inter-word spacing (except in the case of the PRE element). In particular, user agents should collapse input white space sequences when producing output inter-word space. This can and should be done even in the absence of language information (from the lang attribute, the HTTP "Content-Language" 
header field (see [RFC2616], section 14.12), user agent settings, etc.).
      </p>
      <p>
        Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
        facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
        porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
        everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
        per, quas minimum postulant per id.
      </p>
    </Segment>
  )
  return(
        <div>
            <Paragraph/>
<ImageExampleFloated/>
</div>
    )
}}
export default Mypage;
