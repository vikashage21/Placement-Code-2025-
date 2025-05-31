react does not render false , null , undefined , or nan in the Dom. these values, when used in jsx, will result in nothing being displayed.

however, 0 nad empty string ("") are exceptions:


0 is rendered in the dom because it is considered a valid react node . this means that if 0 is the result expression , it will appear in your ui.


empty string are also considered valid and are rendered as will.