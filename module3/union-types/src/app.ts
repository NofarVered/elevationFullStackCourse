// spotcheck 
// const val: string | number | boolean = true;
type Type  = string | number | boolean;
let val : Type = true;

function doX(val: Type ): Type  {
    return val == 8;
}

doX(val);