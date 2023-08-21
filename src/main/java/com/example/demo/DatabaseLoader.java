package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ProductoRepository repositoryP;

	@Autowired
	public DatabaseLoader(ProductoRepository repositoryP) {
		this.repositoryP = repositoryP;
	}

	@Override
	public void run(String... strings) throws Exception {
		Producto iRes = new Producto("Carne de Res",20.99);
		Producto iSandia = new Producto("Sandia",10.00);
		Producto iLeche = new Producto("leche pura vida",5.00);
		this.repositoryP.save(iRes);
		this.repositoryP.save(iSandia);
		this.repositoryP.save(iLeche);

	}
}