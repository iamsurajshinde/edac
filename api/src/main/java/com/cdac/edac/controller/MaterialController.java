package com.cdac.edac.controller;

import com.cdac.edac.entity.Material;
import com.cdac.edac.model.MaterialModel;
import com.cdac.edac.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MaterialController {

    @Autowired
    MaterialService materialService;

    @GetMapping(value = "/materials/{subjectId}")
    List<MaterialModel> getMaterial(@PathVariable("subjectId") Integer subjectId) {
        List<MaterialModel> material = materialService.getMaterial(subjectId);

        return material;
    }

    @PostMapping(value = "/materials")
    MaterialModel saveMaterial(@RequestBody Material material) {

        MaterialModel materialModel = materialService.saveMaterial(material);

        return materialModel;
    }

    @PutMapping(value = "/materials")
    MaterialModel updateMaterial(@RequestBody Material material) {

        MaterialModel materialModel = materialService.updateMaterial(material);

        return materialModel;
    }

}
