export function isEquivalent (a, b)  {
   const aProps = Object.getOwnPropertyNames(a),
         bProps = Object.getOwnPropertyNames(b)

   if (aProps.length !== bProps.length) {
       return false;
   }

   for (var i = 0; i < aProps.length; i++) {
       var propName = aProps[i];

       if (a[propName] !== b[propName]) {
           return false;
       }
   }

   return true;
}
