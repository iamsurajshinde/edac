package com.cdac.edac.service;

import com.cdac.edac.entity.Material;
import com.cdac.edac.entity.Result;
import com.cdac.edac.model.MaterialModel;
import com.cdac.edac.model.ResultModel;
import com.cdac.edac.repository.MaterialRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MaterialServiceImpl implements MaterialService {

    @Autowired
    MaterialRepository materialRepository;

    @Override
    public List<MaterialModel> getMaterial(Integer subjectId) {
        List<MaterialModel> materialModels=new ArrayList<>();
        try {

          List<Material> materials=  materialRepository.findMaterialForSubject(subjectId);

          MaterialModel materialModel;

          for(Material material : materials){

              materialModel=new MaterialModel();
              materialModel.setSubjectId(material.getSubject().getSubjectId());
              materialModel.setName(material.getName());
              materialModel.setUrl(material.getUrl());
              materialModel.setMaterialId(material.getMaterialId());
              materialModels.add(materialModel);
          }


        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }

        return materialModels;
    }

    @Override
    public MaterialModel saveMaterial(Material material) {

        MaterialModel materialModel = null;
        try {
            materialModel=new MaterialModel();
            material = materialRepository.save(material);
           materialModel.setMaterialId(material.getMaterialId());
           materialModel.setUrl(material.getUrl());
           materialModel.setName(material.getName());
           materialModel.setSubjectId(material.getSubject().getSubjectId());
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        return materialModel;
    }

    @Override
    public MaterialModel updateMaterial(Material material) {
        MaterialModel materialModel = new MaterialModel();
        try {
            Material materialFromRepository = materialRepository.getById(material.getMaterialId());

            materialFromRepository.setUrl(material.getUrl());
            materialFromRepository.setName(material.getName());
            materialFromRepository.setSubject(material.getSubject());

            material = materialRepository.save(materialFromRepository);

            materialModel.setMaterialId(material.getMaterialId());
            materialModel.setUrl(material.getUrl());
            materialModel.setName(material.getName());
            materialModel.setSubjectId(material.getSubject().getSubjectId());

        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        return materialModel;
    }
}
