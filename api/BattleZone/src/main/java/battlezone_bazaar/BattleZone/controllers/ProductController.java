package battlezone_bazaar.BattleZone.controllers;

import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.services.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    @GetMapping("/get-all")
    public List<Product> getProducts(){
        return productService.getAllProducts();
    }
    @PostMapping("/save")
    public ResponseEntity<?> saveProduct(@RequestBody ProductDto dto){
        Product productSave = productService.saveProduct(dto);
        return  new ResponseEntity<>(productSave, HttpStatus.CREATED);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<?> removeProduct(@RequestParam String name, @RequestParam String manufacturer){
        if(this.productService.deleteProduct(name, manufacturer)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>("Item not found!", HttpStatus.NOT_FOUND);
    }
}