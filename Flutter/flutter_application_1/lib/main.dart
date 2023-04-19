import 'package:flutter/material.dart';

void main() => runApp(MeuApp());

class MeuApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
            appBar: AppBar(title: Text('Meu primeiro App')),
            body: /* Center(
            child: Text('Olá Mundo'),
          )), */
                /* Container(
              color: Colors.red,
              child: Row(
                children: [
                  Expanded(
                    child: Text('Nome'),
                  ),
                  Expanded(
                    child: Text('Sobrenome'),
                  ),
                  Expanded(
                    child: Text('Idade'),
                  ),
                  Expanded(
                    child: Text('Email'),
                  ),
                  Expanded(
                    child: Text('Telefone'),
                  ),
                ],
              ),
            ) */
                Column(children: [
              Row(
                children: [
                  Expanded(child: Text('Nome')),
                  Expanded(child: Text('Sobrenome')),
                  Expanded(child: Text('Idade')),
                  Expanded(child: Text('Email')),
                ],
              ),
              Row(
                children: [
                  Expanded(child: Text('Will')),
                  Expanded(child: Text('Ferreira')),
                  Expanded(child: Text('19')),
                  Expanded(child: Text('Will@exemplo.com')),
                ],
              ),
              Center(child: Text('Title')),
              Row(
                children: [
                  Expanded(child: Text('Nome')),
                  Expanded(child: Text('Sobrenome')),
                  Expanded(child: Text('Idade')),
                ],
              ),
              Row(
                children: [
                  Icon(
                    Icons.access_alarm_sharp,
                    color: Colors.black,
                  )
                ],
              ),
              Row(children: [
                Container(
                  color: Colors.black,
                  width: 100,
                  height: 100,
                ),
                Expanded(
                    child: Container(
                  color: Colors.grey,
                  height: 100,
                )),
                Container(
                  color: Color.fromARGB(221, 122, 122, 122),
                  width: 100,
                  height: 100,
                )
              ]),
              Column(
                children: [
                  Container(
                    height: 200,
                    color: Colors.cyan,
                  )
                ],
              )
            ])));
  }
}
