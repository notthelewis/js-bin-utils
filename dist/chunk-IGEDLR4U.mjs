import{a as n,b as _,c as e,d as t}from"./chunk-YQXBM7PS.mjs";function b(r,u){if(!n(r)||!n(u))throw new Error("util::two_nibble_to_one_byte::is_valid_nibble::false");return r<<4|u}function l(r){if(!_(r))throw new Error("util::one_u8_to_two_nibbles::is_valid_u8::false");return[r&15,r>>4]}function m(r,u){if(!_(r)||!_(u))throw new Error("util::two_u8_to_one_u16::is_valid_u8::false");return u<<8|r}function f(r){if(!e(r))throw new Error("util::one_u16_to_two_u8::is_valid_u16::false");return[r&255,r>>8]}function w(r,u){if(!e(r)||!e(u))throw new Error("util::two_u16_to_one_u32::is_valid_u16::false");return(u<<16>>>0|r)>>>0}function s(r){if(!t(r))throw new Error("util::one_u32_to_two_u16::is_valid_u32::false");return[r&65535,r>>>16]}function a(r,u,o){if(!_(r)||!_(u)||!_(o))throw new Error("util::three_u8_to_u32::is_valid_u8::false");return o<<16|(u<<8|r)}export{b as a,l as b,m as c,f as d,w as e,s as f,a as g};
