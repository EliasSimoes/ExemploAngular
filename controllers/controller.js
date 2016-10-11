angular.module("CadClientes", []);
angular.module("CadClientes").controller("CadClientesCtrl", function($scope){
  $scope.app = "Cadastro de clientes";
  $scope.clientes = [
    {nome:"Elias", codigo:"0001", valor:"500000", data: new Date()},
    {nome:"Janaina", codigo:"0002", valor:"2000000",data: new Date()},
    {nome:"Jonas", codigo:"0003", valor:"100000",data: new Date()},
    {nome:"Vinicius", codigo:"0004", valor:"500000",data: new Date()},
  ];
  $scope.tiposCliente = [
    {tipo:"Pessoa física", codigo:"01", local:"Nacional"},
    {tipo:"Pessoa jurídica", codigo:"02", local:"Nacional"},
    {tipo:"Sócio", codigo:"03", local:"Nacional"},
    {tipo:"Exportador", codigo:"03", local:"Internacional"},
    {tipo:"Importador", codigo:"03", local:"Internacional"},
  ];

  $scope.classe1 = "selecionado";
  $scope.classe2 = "negrito";

  $scope.adicionarCliente = function(cliente){
    $scope.clientes.push(angular.copy(cliente));
    delete $scope.cliente;
  };

  $scope.apagarCliente = function(clientes){
    $scope.clientes = clientes.filter(function(cliente){
      if (!cliente.selecionado){
         return cliente;
       };
    });
  };

  $scope.checkSelecionado = function(clientes){
      return clientes.some(function(cliente){
        return cliente.selecionado;
      });
  };
});
