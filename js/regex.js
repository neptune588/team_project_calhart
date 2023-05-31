//정규식 배열
export const regexPwArray = [
    {
        id : regexOnlyEng,
        regex : /^[a-z]{6,15}$/ //영어 소문자만
    },
    {
        id : regexEngNSymbols,
        regex : /^(?=.*[a-z])(?=.*[_])[a-z_!@#$%^&*()\-+=]{6,15}$/i //영어 소문자+ 언더바 _ 조합
    },
    {
        id : regexOnlyNumber,
        regex : /^\d{6,15}$/ //숫자만
    },
    {
        id : regexEngNNumber,
        regex : /^[a-z0-9]{6,15}$/ //영어 소문자+숫자 조합
    },
    {
        id : regexEngNSymbolsNNumber,
        regex : /^[a-z0-9_]{6,15}$/ //영어 소문자+숫자+ 언더바_ 조합
    }
]

export const regexNameArray = [
    {
        id : regexKor,
        regex : /^[가-힣]{1,12}$/
    },
    {
        id : regexSymbols,
        regex : /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    }
]
