#### Types
This library validates and converts between these types:
```
nibble  (unsigned,  4 bit integer)
u8      (unsigned,  8 bit integer)
u16     (unsigned, 16 bit integer)
u32     (unsigned, 32 bit integer)
```

Please note that, since JS only has one number type, each 'type' will still be
stored inside a number- but they'll have to first pass verification steps.
