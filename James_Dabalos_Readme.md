Create a password generator according to selected criteria by user.
    Using given files:
        * Added arrays of different types of characters to choose from
        * Added a prompt asking user for password length
        * Added a check that length is within a certain parameter
        * Added variables which confirm character types
        * Added a check to ensure user picks one type of character
        * Added an array containing all chosen character types
        * Password was then generated 
            * The first few characters of password (up to 4) ensures seclected character types were satisfied
            * Then fills the rest of 'password' according to length specified by user

        ** Unable to find a fix for checking password length if prompt was accidentally 'okay' or 'cancel' (the check only runs twice). 