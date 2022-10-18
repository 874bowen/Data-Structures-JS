function distinctSubstring(P, N)
{
    // Hashmap to store all substrings
    var S = new Set();
 
    // Iterate over all the substrings
    for (var i = 0; i < N; ++i) {
 
        // Boolean array to maintain all
        // characters encountered so far
        var freq = Array(26).fill(false);
 
        // Variable to maintain the
        // substring till current position
        var s = "";
 
        for (var j = i; j < N; ++j) {
 
            // Get the position of the
            // character in the string
            var pos = P[j].charCodeAt(0) - 'a'.charCodeAt(0);
 
            // Check if the character is
            // encountred
            if (freq[pos] == true)
                break;
 
            freq[pos] = true;
 
            // Add the current character
            // to the substring
            s += P[j];
 
            // Insert substring in Hashmap
            S.add(s);
        }
    }
 
    return S;
}
 
// Driver code
var S = "abbbbaaabdad";
var N = S.length;

console.log(distinctSubstring(S, N));