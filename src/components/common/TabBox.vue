 <template>
  <div class="list">
    <el-row style="width:100%;" class="list_nav">
      <el-col :span="2">
        <div class="grid-content">编号</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">客户</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">合同状态</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">合同起始时间</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">到期时间</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">联系人</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">联系方式</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">合同</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">客户权限</div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content el-icon-s-tools"></div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row style="width:100%;" class="list_box" v-for="de,index in de" v-bind:key="de.id">
      <el-col :span="2">
        <div class="grid-content">111111111111</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">xx公司</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">未到期</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">2019/7/7</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">2019/7/7</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">联系人</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">联系方式</div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">合同</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content">客户权限</div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content el-icon-setting"></div>
      </el-col>
      <el-col :span="1">
        <div class="grid-content el-icon-delete" @click="del(index)"></div>
      </el-col>
    </el-row>
  </div>
  <div style="display:flex;align-items:center;margin:10px  auto;">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="1"
      layout="total,prev, pager, next, jumper"
      :total="this.de.length"
      background
    ></el-pagination>
  </div>
</template>