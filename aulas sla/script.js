function mediapon(n1, n2, n3, p1, p2, p3){

    var somapesos = soma(p1, p2, p3);

    var notap1 = multiplica(n1, p1);
    var notap2 = multiplica(n2, p2);
    var notap3 = multiplica(n3, p3)

    var somanotas = soma(notap1, notap2, notap3)

    var mediaponderada = somanotas / somapesos

    alert("A média ponderada entre a primeira nota: " + (n1) + " com peso: " + (p1) +
    ", a segunda nota: " + (n2) + " com peso: " + (p2) + " e a terceira nota: " +
    (n3) + " com peso: " + (p3) + " é: " + (mediaponderada.toFixed(2)));

}

function soma(a, b, c) {
    return a + b + c
}

function multiplica(a, b){
    return a * b
}

mediapon(2, 5, 10, 3, 6, 9);